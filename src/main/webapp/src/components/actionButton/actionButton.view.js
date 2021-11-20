import tooltip from "@/components/tooltip/tooltip";

export default {
    components: {
        tooltip
    },
    name: "actionButton",
    props: {
        inputIconShow: "",
        tooltipMsg: { type: String, required: false},
    },
    data: function() {
        return {
            iconToShow: ""
        }
    },
    methods: {
        buttonClickFunction: function (){
            this.$emit('buttonFunction');
        }
    }
}