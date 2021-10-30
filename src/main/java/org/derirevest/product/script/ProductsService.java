package org.derirevest.product.script;

import org.derirevest.product.model.Products;
import org.derirevest.product.model.Result;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class ProductsService {
    private static final String queryProdutos = "select p from Products p";
    private static final String queryProdutoSearch = "SELECT %s FROM ola";

    @Inject
    EntityManager em;

    public List<List<Result>> getAlertProducts(){
        List<Products> productsList = em.createQuery(queryProdutos, Products.class).getResultList();
        List<List<Result>> outputList = new ArrayList<>();

        for (Products product: productsList) {
            List<Result> results = new ArrayList<>();
            if(product.getQuantity()<10){
                results.add(new Result("data",product.getName()));
                results.add(new Result("data",product.getQuantity()));
            }
            outputList.add(results);
        }
        return outputList;
    }

    public List<String> getResults(String query){
        List<String> output = new ArrayList<>();
        String formattedQuery = "";

        //Tipo de pesquisa:
        //  - Sem flag:             Pesquisar por codigo de produto
        //  - Flag: 'Nome:' :       Pesquisar pelo nome
        //  - Flag: 'Categoria:'    Pesquisar por categoria
        //  - Flag: 'Material:'     Pesquisa por material
        String getFlag = query.split(":")[0];
        switch (getFlag.toLowerCase()){
            case "nome":
                formattedQuery = String.format(queryProdutoSearch,"Nome");
                break;
            case "categoria":
                formattedQuery = String.format(queryProdutoSearch,"Categoria");
                break;
            case "material":
                formattedQuery = String.format(queryProdutoSearch,"Material");
                break;
            default:
                formattedQuery = String.format(queryProdutoSearch,"Codigo");
                break;
        }
        List<Products> listaProdutos= em.createQuery(formattedQuery, Products.class).getResultList();

        System.out.println(listaProdutos);

        return output;
    }

    public Products persistProdutos(Products products){
        em.persist(products);
        return products;
    }
}
