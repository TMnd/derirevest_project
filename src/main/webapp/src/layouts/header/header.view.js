import { Icon } from '@iconify/vue2';
import { serverBus } from '../../main';
import Vue from "vue";

export default {
    name: "Header",
    components: {
        Icon,
    },
    props: {
        applicationName: String
    },
    data:
        function(){
            return {
                server: "",
                username: "",
                optionsList: Vue.prototype.$routeObj.getVueRouter_routes()
            }
        },
    created() {
        // Using the server bus
        serverBus.$on('serverSelected', (server) => {
            let input = server.split(",");
            // eslint-disable-next-line
            $(".removable").remove();
            input.forEach(e => {
                // eslint-disable-next-line
                $("#navigation ol").append("<span class='removable'> / </span>");
                // eslint-disable-next-line
                $("#navigation ol").append("<a href='/"+e+"' class='removable'>"+e+"</a>");
            });
        });
    }, mounted() {
        this.username = Vue.prototype.$loggedUser.getUsername();
    }
}