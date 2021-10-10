export default {
    name: "radialMenuWithLabel",
    props : {
        labelMsg: "",
        radialColor: ""
    },
    data: function() {
        return {
            styleObject: {
                fill: this.radialColor
            }
        }
    },
    methods: {
        menuOptionClickFunction: function (){
            this.styleObject.fill = (this.styleObject.fill!=="#212529") ? this.styleObject.fill = "#212529" :  this.radialColor;
            this.$emit('menuOptionFunction');
        }
    }
}