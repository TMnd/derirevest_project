package org.derirevest.routes.model;

import javax.persistence.*;

@Entity
public class Routes {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    @Column(name = "icon")
    private String icon;
    @Column(name = "title")
    private String title;
    @Column(name = "component")
    private String component;
    @Column(name = "path")
    private String path;
    @OneToOne
    private RoutesGroup ref_route_group;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public String getComponent() {
        return component;
    }

    public void setComponent(String component) {
        this.component = component;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public RoutesGroup getRef_route_group() {
        return ref_route_group;
    }

    public void setRef_route_group(RoutesGroup ref_route_group) {
        this.ref_route_group = ref_route_group;
    }
}
