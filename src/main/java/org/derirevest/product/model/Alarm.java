package org.derirevest.product.model;

public class Alarm {
    private Products product;
    private Integer productInventoryState;

    public Alarm(){}

    public Alarm(Products product, Integer productInventoryState) {
        this.product = product;
        this.productInventoryState = productInventoryState;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }

    public Integer getProductInventoryState() {
        return productInventoryState;
    }

    public void setProductInventoryState(Integer productInventoryState) {
        this.productInventoryState = productInventoryState;
    }

    @Override
    public String toString() {
        return "Alarm{" +
                "product=" + product +
                ", productInventoryState=" + productInventoryState +
                '}';
    }
}
