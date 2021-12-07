export default {
    name: "modalDialog",
    data: function() {
        return {
            isModalShowing: false,
            displayData: {}
        }
    },
    methods:{
        openDialog(dataTodisplay, origin) {
            this.displayData["origin"]=origin;
            this.displayData["data"]=dataTodisplay;
            this.isModalShowing = true;
        }
    }
}