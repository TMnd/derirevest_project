package org.derirevest.delivery.script;

import org.derirevest.delivery.model.Delivery;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

@ApplicationScoped
public class DeliveryService {
    @Inject
    EntityManager em;

    public List<Delivery> getDeliveries(){
        return em.createQuery("select e from Delivery e", Delivery.class).getResultList();
    }

    public Delivery persistDelivery(Delivery delivery){
        em.persist(delivery);
        return delivery;
    }
}
