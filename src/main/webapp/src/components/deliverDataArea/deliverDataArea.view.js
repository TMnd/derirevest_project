import tooltip from "@/components/tooltip/tooltip";

export default {
    name: "deliverDataArea",
    props: {
        deliver: { type: Object, required: true},
        tooltipMsg : { type: String, required: false},
    },
    components: {
        tooltip
    },
    data: function() {
        return {
            classStyle: "",
            showInfo: false
        }
    },
    created() {
        switch (this.deliver.estado) {
            case "1":
                this.classStyle = "list-group-item list-group-item-success";
                break;
            case "2":
                this.classStyle = "list-group-item list-group-item-secondary";
                break;
            default: //3
                this.classStyle = "list-group-item list-group-item-danger";
                this.showInfo = true;
                break;
        }

    }
}
