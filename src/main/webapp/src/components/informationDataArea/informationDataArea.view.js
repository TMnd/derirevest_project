import tooltip from "@/components/tooltip/tooltip";
import iconTemplate from "@/components/iconTemplate/iconTemplate";

export default {
    name: "informationDataArea",
    props: {
        inputData: { type: Object, required: true},
        tooltipMsg : { type: String, required: false},
        contexto: ""
    },
    components: {
        tooltip,
        iconTemplate
    },
    data: function() {
        return {
            classStyle: "",
            showInfo: false
        }
    },
    created() {
        if(this.contexto === 'delivery'){
            switch (this.inputData.estado) {
                case "0":
                    this.classStyle = "list-group-item empty";
                    this.showInfo = true;
                    break;
                case "1":
                    this.classStyle = "list-group-item enoughQuantity";
                    break;
                case "2":
                    this.classStyle = "list-group-item list-group-item-secondary";
                    break;
                default:
                    break;
            }
        }else if(this.contexto === 'searchResult'){
            this.classStyle = "searchResult";
        }
    }
}
