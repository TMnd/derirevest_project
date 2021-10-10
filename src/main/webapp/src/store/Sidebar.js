class Sidebar {
    SidebarObj;

    constructor() {
    }

    setSidebarObj(SidebarObj){
        this.SidebarObj = SidebarObj;
    }

    getSidebarObj() {
        return this.SidebarObj;
    }

    setSidebar(state, panel){
        if(this.SidebarObj){
            if(state==="hide"){
                this.SidebarObj.hide(panel);
            }else{
                this.SidebarObj.show(panel);
            }
        }
    }
}

export default Sidebar;