import Vue from "vue";
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import deliverDataArea from "@/components/deliverDataArea/deliverDataArea";
import actionButton from "../../components/actionButton/actionButton";
import radialMenuWithLabel from "../../components/radialMenuWithLabel/radialMenuWithLabel";
import tableTBodyLine from "../../components/tableTBodyLine/tableTBodyLine";
import iconTemplate from '../../components/iconTemplate/iconTemplate'

export default {
    components: {
        Splitpanes,
        Pane,
        deliverDataArea,
        actionButton,
        radialMenuWithLabel,
        tableTBodyLine,
        iconTemplate
    },
    name: 'Home',
    props: {
        msg: String
    },
    data: function() {
        return {
            url: process.env.VUE_APP_URL,
            COMPANY_USER: false,
            optionsList: Vue.prototype.$routeObj.getVueRouter_routes(),
            text: '',
            deliversData: [],
            productAlerts: [],
            selectedDeliveryFilter: [0,1,2],
            selectedAlertsFilter: [0,1]
        }
    },
    created: function() {
        this.COMPANY_USER = Vue.prototype.$loggedUser.getResources().includes("COMPANY_USER");
        this.getDeliveryData();
        this.getProductAlertsData();
    },
    methods: {
        searchProduct: function () {
            alert("searchProduct");
        },
        refreshAlert: function () {
            this.getProductAlertsData();
        },
        refreshDelivery: function () {
            this.getDeliveryData();
        },
        addDeliveryFilter: function(stage){
            if(this.selectedDeliveryFilter.includes(stage)){
                this.selectedDeliveryFilter.splice(this.selectedDeliveryFilter.indexOf(stage),1);
            }else{
                this.selectedDeliveryFilter.push(stage);
            }
        },
        addAlertFilter: function(stage){
            if(this.selectedAlertsFilter.includes(stage)){
                this.selectedAlertsFilter.splice(this.selectedAlertsFilter.indexOf(stage),1);
            }else{
                this.selectedAlertsFilter.push(stage);
            }
        },
        getDeliveryData: function () {
            let self = this;
            this.deliversData = [];
            Vue.prototype.$http.get(Vue.prototype.$env("/entregas"))
                .then( (response) => {
                    response.data.forEach(element => self.deliversData.push(element));
            });
        },
        getProductAlertsData: function () {
            let self = this;
            this.productAlerts = [];
            Vue.prototype.$http.get(Vue.prototype.$env("/produtos/alerts"))
                .then( (response) => {
                    response.data.forEach(element => self.productAlerts.push(element));
                });
        },
        checkRoutePermission: function(inputRouteGroup) {
            switch (inputRouteGroup){
                case 1:
                    return Vue.prototype.checkAuthorization('ROUTE_PRODUCT');
                case 2:
                    return Vue.prototype.checkAuthorization('ROUTE_DELIVERY');
                case 3:
                    return Vue.prototype.checkAuthorization('ROUTE_RECEIPTS');
                case 4:
                    return Vue.prototype.checkAuthorization('ROUTE_CONTACTS');
                case 5:
                    return Vue.prototype.checkAuthorization('ROUTE_REPORTS');
                default:
                    break;
            }
            return false;
        }
    }
}