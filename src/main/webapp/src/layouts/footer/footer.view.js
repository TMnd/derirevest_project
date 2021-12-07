import {version, name} from '../../../package.json';
import modalDialog from "@/components/modalDialog/modalDialog";

export default {
    name: "Footer",
    components: {
        modalDialog
    },
    data: function () {
        return {
            currentDate: new Date().getFullYear(),
            autor: "João Luís Amaral",
            appVersion: version,
            appName: name
        }
    },
    methods: {
        openModal(){
            let appInfo = {};
            appInfo["app_Version"]=this.appVersion;
            appInfo["app_Name"]=this.appName;
            console.log(appInfo);
            this.$refs.modalDialog.openDialog(appInfo, "footer");
        }
    }
}