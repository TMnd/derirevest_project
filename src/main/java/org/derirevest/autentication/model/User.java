package org.derirevest.autentication.model;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class User {
    private String nome;

    public User(){}

    public User(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Override
    public String toString() {
        return "User{" +
                "nome='" + nome + '\'' +
                '}';
    }
}
