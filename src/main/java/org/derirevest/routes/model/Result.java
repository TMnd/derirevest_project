package org.derirevest.routes.model;

import java.util.ArrayList;
import java.util.List;

public class Result {
    private List<Route> routeList;
    private List<VueRoute> vueRouteList;

    public Result(List<Route> routeList, List<VueRoute> vueRouteList) {
        this.routeList = routeList;
        this.vueRouteList = vueRouteList;
    }

    public List<Route> getRouteList() {
        return routeList;
    }

    public void setRouteList(List<Route> routeList) {
        this.routeList = routeList;
    }

    public List<VueRoute> getVueRouteList() {
        return vueRouteList;
    }

    public void setVueRouteList(List<VueRoute> vueRouteList) {
        this.vueRouteList = vueRouteList;
    }

}
