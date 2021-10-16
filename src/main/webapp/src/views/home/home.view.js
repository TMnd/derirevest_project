import Vue from "vue";
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import informationDataArea from "@/components/informationDataArea/informationDataArea";
import actionButton from "../../components/actionButton/actionButton";
import radialMenuWithLabel from "../../components/radialMenuWithLabel/radialMenuWithLabel";
import tableTBodyLine from "../../components/tableTBodyLine/tableTBodyLine";
import iconTemplate from '../../components/iconTemplate/iconTemplate'
// import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import 'datatables.net-responsive-dt/js/responsive.dataTables'
import $ from 'jquery';

export default {
    components: {
        Splitpanes,
        Pane,
        informationDataArea,
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
            selectedAlertsFilter: [0,1],
            showSearchResult: false,
            searchResult: [
                {
                    "icon": "door",
                    "categoria": "porta",
                    "tipo": "--",
                    "codigo": "A12R23",
                    "nomeProduto": "porta 1",
                    "quantidade": 200,
                    "preco": "2€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "door",
                    "categoria": "porta",
                    "tipo": "--",
                    "codigo": "aaaaa",
                    "nomeProduto": "porta 2",
                    "quantidade": 0,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                },
                {
                    "icon": "basket",
                    "categoria": "aqa",
                    "tipo": "--",
                    "codigo": "qqweqeqweq",
                    "nomeProduto": "i dont know",
                    "quantidade": 4,
                    "preco": "1€",
                    "estado": 4,
                    "material": "madeira"
                }
            ],
            dtRef: null
        }
    },
    created: function() {
        this.COMPANY_USER = Vue.prototype.$loggedUser.getResources().includes("COMPANY_USER");
        this.getDeliveryData();
        this.getProductAlertsData();
    },
    methods: {
        searchProduct: function () {
            this.showSearchResult = !this.showSearchResult;
            setTimeout(function(){ $('#searchDataTable').DataTable().columns.adjust().draw(); }, 100);
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
                    console.log(response);
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
    },
    mounted: function (){
        this.dtRef = $('#searchDataTable').DataTable({
            responsive: true,
            scrollCollapse: true,
            colReorder: false,
            keys: true,
            select: true,
            columnDefs: [
                { orderable: false, targets: -1 }
            ],
            aLengthMenu: [[5, 10, 15, 20,25, 30, 35, -1], [5, 10, 15, 20,25, 30, 35, "All"]],
            pageLength: 5,
            language: {
                lengthMenu: "Monstrar _MENU_ produtos por pagina",
                zeroRecords: "Não foi encontrado dados",
                info: "Mostrando a pagina _PAGE_ de _PAGES_",
                infoEmpty: "Não foi encontrado dados",
                infoFiltered: "(filtrado de um total de _MAX_ produtos)",
                oPaginate: {
                    sFirst: "Primeiro",
                    sLast: "Ultimo",
                    sNext: "Proxima",
                    sPrevious: "Anterior"
                },
            },
            searching: false
        });
    }
}