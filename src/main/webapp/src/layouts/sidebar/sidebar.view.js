import { Icon } from '@iconify/vue2';
import { serverBus } from '../../main';
import Vue from 'vue'
import Sidebar from "../../store/Sidebar";
// import Router from "../../router";/

Vue.prototype.$sideBar = new Sidebar();

export default {
    components: {
        Icon,
    },
    data:
        function() {
            return {
                items: [],
            }
        },
    methods: {
        openSideBarGroup(i) {
            this.items.forEach(e => {
                if(e.open){
                    e.open = !e.open;
                }
            });
            if((this.items[i].sub_links).length>0){
                this.items[i].open = (!this.items[i].open);
            }
        },
        updateTopNav: function (data) {
            serverBus.$emit('serverSelected', data);
        }
    },
    mounted: function() {
        //Generate Items object base of routes object.
        const routes = this.$routeObj.getRoutes();
        routes.forEach(e => {
            this.items.push(e);
        });
        // eslint-disable-next-line
        $(document).ready(function() {
            // eslint-disable-next-line
            var $outerLayout = $("#layouts").layout({
                // Vue.prototype.$layout = $("#layouts").layout({
                applyDefaultStyles:				true // basic styling for testing & demo purposes
                ,	minSize:						20 // TESTING ONLY
                ,	spacing_closed:					45
                , spacing_open:           0
                ,	fxName:							"slide" // do not confuse with "slidable" option!
                ,	fxSpeed_open:					1000
                ,	fxSpeed_close:					2500
                ,	fxSettings_open:				{ easing: "easeInQuint" }
                ,	fxSettings_close:				{ easing: "easeOutQuint" }
                ,	togglerTip_open:		"Close West Pane"
                ,	togglerTip_closed:		"Abrir menu"
                ,	resizerTip_open:		"Resize West Pane"
                , size:					400
                ,	togglerLength_closed:	48			// make toggler 'square' - 21x21
                ,	togglerAlign_closed:	"bottom"		// align to top of resizer
                ,	togglerLength_open:		0			// NONE - using custom togglers INSIDE west-pane
                ,	slideTrigger_open:		"click" 	// default
                ,	initClosed:				false
            });

            Vue.prototype.$sideBar.setSidebarObj($outerLayout);

            // console.log(Vue.prototype.$layout);

            Vue.prototype.$sideBar.setSidebar("hide","west")

            // eslint-disable-next-line
            $("#close").click(function (){
                $outerLayout.toggle('west');
            })

            // $("#ola").click(function (){
            //     console.log(outerLayout);
            //     // $("#sidebarArea").show();
            //     // outerLayout.toggle('west');
            //     outerLayout.show('west');
            // })
        });
    },
}
