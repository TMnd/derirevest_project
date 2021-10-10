package org.derirevest.delivery.script;

import org.derirevest.delivery.model.Entregas;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

@ApplicationScoped
public class DeliveryService {
    @Inject
    EntityManager em;

    public List<Entregas> getEntregas(){
        return em.createQuery("select e from Entregas e", Entregas.class).getResultList();
    }

    public Entregas persistEntregas(Entregas entrega){
        em.persist(entrega);
        return entrega;
    }
}
