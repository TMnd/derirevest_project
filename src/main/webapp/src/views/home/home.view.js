import Vue from "vue";
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import informationDataArea from "@/components/informationDataArea/informationDataArea";
import actionButton from "../../components/actionButton/actionButton";
import radialMenuWithLabel from "../../components/radialMenuWithLabel/radialMenuWithLabel";
import tableTBodyLine from "../../components/tableTBodyLine/tableTBodyLine";
import iconTemplate from '../../components/iconTemplate/iconTemplate'
import tooltip from "@/components/tooltip/tooltip";
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
        iconTemplate,
        tooltip
    },
    name: 'Home',
    props: {
        msg: String,
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
            searchResult: [],
            dtRef: null,
            searchInputValue: "",
            inputToolTip: "Flags a usar: ==> material: *procurar por material => nome: *procurar por nome* => catgoria *procurar por categoria*, => sem flag, procura pelo codigo de produto.",
        }
    },
    created: function() {
        this.COMPANY_USER = Vue.prototype.$loggedUser.getResources().includes("COMPANY_USER");
        this.getDeliveryData();
        this.getProductAlertsData();
        window.addEventListener("resize", this.myEventHandler);
    },
    methods: {
        myEventHandler(e) {
            $('#searchDataTable').DataTable().columns.adjust().draw();
        },
        searchProduct: function () {
            // this.showSearchResult = !this.showSearchResult;
            this.showSearchResult=true;
            let self = this;

            setTimeout(function(){ $('#searchDataTable').DataTable().columns.adjust().draw(); }, 100);

            this.searchResult = [];
            Vue.prototype.$http.get(Vue.prototype.$env(`/produtos/searchProduct/${self.searchInputValue}`))
                .then( (response) => {
                    response.data.forEach(element => self.searchResult.push(element));
                    if(self.searchResult.length>0){
                        $(".dataTables_empty").hide();
                    }else{
                        $(".dataTables_empty").show();
                    }
                });
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
            Vue.prototype.$http.get(Vue.prototype.$env("/delivery"))
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