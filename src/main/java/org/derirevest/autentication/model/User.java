package org.derirevest.autentication.model;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class User {
    private String nome;
    private List<String> roles;

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

    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

    @Override
    public String toString() {
        return "User{" +
                "nome='" + nome + '\'' +
                '}';
    }
}
