export default {
    name: "actionButton",
    props: {
        inputIconShow: "",
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