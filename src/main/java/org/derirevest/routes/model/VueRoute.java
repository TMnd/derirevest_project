package org.derirevest.routes.model;

//             {
//                 title: 'title 1',
//                 description: 'description one',
//                 open: true,
//                 iconOpen: 'ic:twotone-arrow-drop-down',
//                 iconClose: 'ic:twotone-arrow-drop-up',
//                 sub_links: [
//                     {
//                         title: 'Home',
//                         description: 'sub-title 1',
//                         path: "/",
//                         component: "home"
//                     },
//                     {
//                         title: 'About',
//                         description: 'sub-title 2',
//                         path: "/about",
//                         component: "home"
//                     }
//                     ,
//                     {
//                         title: 'Contact',
//                         description: 'sub-title 2',
//                         path: "/contact",
//                         component: "contact"
//                     }
//                 ]
//             }

import java.util.ArrayList;
import java.util.List;

public class VueRoute {
    private String title;
    private String description;
    private Boolean open;
    private String iconOpen;
    private String iconClose;
    private List<Route> subLinks;

    public VueRoute() {
        this.open = true;
        this.iconOpen = "ic:twotone-arrow-drop-down";
        this.iconClose = "ic:twotone-arrow-drop-up";
        this.subLinks = new ArrayList<>();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getOpen() {
        return open;
    }

    public void setOpen(Boolean open) {
        this.open = open;
    }

    public String getIconOpen() {
        return iconOpen;
    }

    public void setIconOpen(String iconOpen) {
        this.iconOpen = iconOpen;
    }

    public String getIconClose() {
        return iconClose;
    }

    public void setIconClose(String iconClose) {
        this.iconClose = iconClose;
    }

    public List<Route> getSubLinks() {
        return subLinks;
    }

    public void setSubLinks(List<Route> subLinks) {
        this.subLinks = subLinks;
    }

    public void addLinkSubLink(Route newRoute){
        this.subLinks.add(newRoute);
    }
}
