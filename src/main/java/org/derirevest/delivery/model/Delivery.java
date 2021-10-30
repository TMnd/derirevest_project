package org.derirevest.delivery.model;

import org.derirevest.clients.model.Clients;
import org.derirevest.product.model.Products;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "delivery")
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(name = "message")
    private String message;
    @Column(name = "delivery_date")
    private ZonedDateTime delivery_date;
    @Column(name = "status")
    private String status;
    @ManyToOne
    private Clients ref_id_clients;
    @OneToOne
    private Products ref_id_products;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ZonedDateTime getDelivery_date() {
        return delivery_date;
    }

    public void setDelivery_date(ZonedDateTime delivery_date) {
        this.delivery_date = delivery_date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Clients getRef_id_clients() {
        return ref_id_clients;
    }

    public void setRef_id_clients(Clients ref_id_clients) {
        this.ref_id_clients = ref_id_clients;
    }

    public Products getRef_id_products() {
        return ref_id_products;
    }

    public void setRef_id_products(Products ref_id_products) {
        this.ref_id_products = ref_id_products;
    }
}
