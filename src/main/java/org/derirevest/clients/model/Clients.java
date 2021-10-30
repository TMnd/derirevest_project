package org.derirevest.clients.model;

import javax.persistence.*;

@Entity
public class Clients {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(name = "name")
    private String name;

    public String getNome() {
        return name;
    }

    public void setNome(String nome) {
        this.name = name;
    }
}
