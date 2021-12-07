import Vue from "vue";
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import informationDataArea from "@/components/informationDataArea/informationDataArea";
import actionButton from "../../components/actionButton/actionButton";
import radialMenuWithLabel from "../../components/radialMenuWithLabel/radialMenuWithLabel";
import tableTBodyLine from "../../components/tableTBodyLine/tableTBodyLine";
import iconTemplate from '../../components/iconTemplate/iconTemplate'
import tooltip from "@/components/tooltip/tooltip";
import modalDialog from "@/components/modalDialog/modalDialog";
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
        tooltip,
        modalDialog
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
            showSearchResultClearButton: false,
            searchResult: [],
            searchHeader: [
                {
                    text: 'Categoria',
                    value: 'category',
                    align: 'left',
                    sortable: false
                },
                { text: 'Codigo Prod.', value: 'productCode', align: 'center' },
                { text: 'Nome', value: 'name', align: 'center' },
                { text: 'Material', value: 'material', align: 'center' },
                { text: 'Quantidade', value: 'quantity', align: 'center' },
                { text: 'Preço', value: 'price', align: 'center' }
            ],
            alarmHeader: [
                {
                    text: 'Codigo Prod.',
                    value: 'productCode',
                    align: 'left',
                    sortable: false
                },
                { text: 'Quantidade', value: 'quantity', align: 'center', sortable: false }
            ],
            dtRef: null,
            searchInputValue: "",
            inputToolTip: "Flags a usar: ==> material: *procurar por material => nome: *procurar por nome* => catgoria *procurar por categoria*, => sem flag, procura pelo codigo de produto.",
            focusSingleProduct: false
        }
    },
    created: function() {
        this.COMPANY_USER = Vue.prototype.$loggedUser.getResources().includes("COMPANY_USER");
        this.getDeliveryData();
        this.getProductAlertsData();

    },
    methods: {
        /*modal(name) {
            this.$refs.modal.helloWorld();
        },*/
        selectSearchProduct: function (row) {
            this.$refs.modalDialog.openDialog(row, "home");
        },
        searchProductClear: function() {
            this.showSearchResult = false;
            this.showSearchResultClearButton = false;
            this.searchResult = [];
        },
        searchProduct: function () {
            let self = this;
            this.showSearchResultClearButton=true;
            if(this.searchInputValue){
                this.showSearchResult=true;
                this.searchResult = [];

                Vue.prototype.$http.get(Vue.prototype.$env(`/produtos/searchProduct/${self.searchInputValue}`))
                    .then( (response) => {
                        response.data.forEach(element => self.searchResult.push(element));
                        document.getElementById("product-search-input").addEventListener("search", function(event) {
                            this.showSearchResult = false;
                            this.searchResult=[];
                        });
                    });
            }else{
                document.getElementById("product-search-input").style.color = "red";
                this.searchInputValue = "Insira o codigo do produto..."

                setTimeout(function(){
                    self.searchInputValue="";
                    document.getElementById("product-search-input").style.color = "";
                }, 3000);
            }
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
    }
}