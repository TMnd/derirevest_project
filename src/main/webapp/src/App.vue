<template>
  <div>
    <div>
      <Header applicationName="Derirevest S.U Lda"/>
      <div id="layouts">
        <div class="ui-layout-center fullHeight row">
          <div class="col-lg-12">
<!--            <Home msg="Welcome to Your Vue.js App"/>-->
            <router-view></router-view>
          </div>
        </div>
        <Sidebar :v-show=showSideBar />
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Home from './views/home/home.vue'
import Header from './layouts/header/header.vue'
import Footer from './layouts/footer/footer.vue'
import Sidebar from "./layouts/sidebar/sidebar";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Vue from "vue";

export default {
  name: 'App',
  props:{
    sideBarLayout: Object
  },
  data: function() {
      return {
        showSideBar: false,
        posts: [],
      }
    },
  components: {
    Home,
    Header,
    Footer,
    Sidebar,
  },mounted() {
    //Fix jquery UI-Layout
    (function ($){
      $.fn.selector = { split: function() { return ""; }};
    })(jQuery);
  },
  updated(){
    //Show hide sidebar
    let current = window.location.href.split("/");
    if(current[current.length-1]===""){
      if(Vue.prototype.$sideBar){
        Vue.prototype.$sideBar.setSidebar("hide","west");
      }
    }else{
      if(Vue.prototype.$sideBar){
        Vue.prototype.$sideBar.setSidebar("show","west");
      }
    }
  },
  methods: {

  }
}

</script>

<style>
#layouts{
  zoom: 1;
  overflow: hidden !important;
  width: auto;
  height: auto;
  margin-top: 25px;
  position: absolute;
  inset: 56px 0px;
  _width:		100%; /* min-width for IE6 */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
