package org.derirevest.delivery.model;

import org.derirevest.clients.model.Clientes;
import org.derirevest.product.model.Produtos;

import javax.persistence.*;
import java.time.ZonedDateTime;

@Entity
@Table(name = "entregas")
public class Entregas {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(name = "mensagem")
    private String mensagem;
    @Column(name = "data_entrega")
    private ZonedDateTime data_entrega;
    @Column(name = "estado")
    private String estado;
    @ManyToOne
    private Clientes ref_id_clientes;
    @OneToOne
    private Produtos ref_id_produtos;

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public ZonedDateTime getData_entrega() {
        return data_entrega;
    }

    public void setData_entrega(ZonedDateTime data_entrega) {
        this.data_entrega = data_entrega;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Clientes getRef_id_clientes() {
        return ref_id_clientes;
    }

    public void setRef_id_clientes(Clientes ref_id_clientes) {
        this.ref_id_clientes = ref_id_clientes;
    }

    public Produtos getRef_id_produtos() {
        return ref_id_produtos;
    }

    public void setRef_id_produtos(Produtos ref_id_produtos) {
        this.ref_id_produtos = ref_id_produtos;
    }
}
