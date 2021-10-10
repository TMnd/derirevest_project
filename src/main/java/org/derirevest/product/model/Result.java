package org.derirevest.product.model;

public class Result {
    private String elementType;
    private Object element;
    private Integer productInventoryState;

    public Result(){}

    public Result(String elementType, Object element) {
        this.elementType = elementType;
        this.element = element;
    }

    public String getElementType() {
        return elementType;
    }

    public void setElementType(String elementType) {
        this.elementType = elementType;
    }

    public Object getElement() {
        return element;
    }

    public void setElement(Object element) {
        this.element = element;
    }

    public Integer getProductInventoryState() {
        return productInventoryState;
    }

    public void setProductInventoryState(Integer productInventoryState) {
        this.productInventoryState = productInventoryState;
    }

    @Override
    public String toString() {
        return "Result{" +
                "elementType='" + elementType + '\'' +
                ", element=" + element +
                ", productInventoryState=" + productInventoryState +
                '}';
    }
}
