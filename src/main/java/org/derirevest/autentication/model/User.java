package org.derirevest.autentication.model;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class User {
    private String name;
    private List<String> roles;

    public User(){}

    public User(String nome) {
        this.name = nome;
    }

    public String getNome() {
        return name;
    }

    public void setNome(String nome) {
        this.name = nome;
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
                "nome='" + name + '\'' +
                '}';
    }
}
