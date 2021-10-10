import VueRouter from 'vue-router'

class Router {
    vueRoutes;
    routes;

    constructor(inputRoutes) {
        this.vueRoutes = inputRoutes[0];
        this.routes = inputRoutes[1];
    }

    getRoutes() {
        return this.routes;
    }

    getVueRouter_routes() {
        return new VueRouter({
            routes: this.vueRoutes
        });
    }
}

export default Router;