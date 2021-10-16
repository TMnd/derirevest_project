import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies';
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Router from "./router/index";
import axios from 'axios';
import UserModel from "@/store/UserModel";
import dotenv from 'dotenv';
import vuetify from '@/plugins/vuetify'

let router = "";

dotenv.config()

Vue.use(VueRouter)
Vue.use(BootstrapVue);
Vue.use(VueCookies);
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

export const serverBus = new Vue();

Vue.prototype.$http = axios;

Vue.prototype.$env = function (endpoint) {
    return "http://"+process.env.VUE_APP_BACKEND_URL+":"+process.env.VUE_APP_BACKEND_PORT+""+endpoint;
}

const getUserData = Vue.prototype.$http.get(Vue.prototype.$env("/api/users/me/"));
const getWebRoutes = Vue.prototype.$http.get(Vue.prototype.$env("/api/web/routes"));

function getInitData() {
    return Vue.prototype.$http.all([getUserData, getWebRoutes]).then(Vue.prototype.$http.spread((...responses) => {
        const getUserDataResponse = responses[0];
        const getWebRoutesResponse = responses[1];

        if(getUserDataResponse){
            let resources = getUserDataResponse.data.role.replace(/^\[|\]|\s/gm, '').trim();
            if(!resources.includes(",")){
                let aux = []
                aux.push(resources);
                resources = aux;
            }else{
                resources = resources.split(",");
            }

            Vue.prototype.$loggedUser = new UserModel(
                getUserDataResponse.data.username,
                getUserDataResponse.data.email,
                getUserDataResponse.data.realm_access,
                resources
            );

            Vue.prototype.checkAuthorization = (resource) => {
                return Vue.prototype.$loggedUser.getResources().includes(resource);
            }
        }

        if(getWebRoutesResponse){
            let routesList = [];
            let context = getWebRoutesResponse.data.routeList;

            routesList.push({ path: '/', component: () => import('./views/home/home'), icon: "home", title: "Home" });

            context.forEach(function(element){
                let component = String('./views/'+element.component+'/'+element.component);
                routesList.push({ path: element.path, component: () => import(component), icon: element.icon, title: element.title, routeGroup: element.routeGroup });
            });

            Vue.prototype.$routeObj = new Router([routesList, getWebRoutesResponse.data.vueRouteList]);

            router = Vue.prototype.$routeObj.getVueRouter_routes();
        }

    })).catch(errors => {
        throw errors;
    });
}

getInitData().then(() => {
    new Vue({
        router,
        vuetify,
        render: h => h(App),
    }).$mount('#app')
})