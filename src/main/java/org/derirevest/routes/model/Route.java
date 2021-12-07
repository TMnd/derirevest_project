package org.derirevest.routes.model;

public class Route {
    private String path;
    private String component;
    private String icon;
    private String title;
    private Integer routeGroup;

    public Route(String path, String component, String icon, String title, Integer routeGroup) {
        this.title = title;
        this.path = path;
        this.component = component;
        this.icon = icon;
        this.routeGroup = routeGroup;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getComponent() {
        return component;
    }

    public void setComponent(String component) {
        this.component = component;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getRouteGroup() {
        return routeGroup;
    }

    public void setRouteGroup(Integer routeGroup) {
        this.routeGroup = routeGroup;
    }
}
