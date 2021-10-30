package org.derirevest.product.model;

import javax.persistence.*;

@Entity
public class Products {
    @Id
//    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "product_code")
    private String productCode;
    @Column(name = "name")
    private String name;
    @ManyToOne
    private Category refCategory;
    @ManyToOne
    private Material refMaterial;
    @Column(name = "quantity")
    private Integer quantity;
    @Column(name = "price")
    private Float price;

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getRefCategory() {
        return refCategory;
    }

    public void setRefCategory(Category refCategory) {
        this.refCategory = refCategory;
    }

    public Material getRefMaterial() {
        return refMaterial;
    }

    public void setRefMaterial(Material refMaterial) {
        this.refMaterial = refMaterial;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }
}
