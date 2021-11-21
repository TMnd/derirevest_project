package org.derirevest.product.script;

import org.derirevest.product.model.Products;
import org.derirevest.product.model.Alarm;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@ApplicationScoped
public class ProductsService {
    private static final String queryProdutos = "select p from Products p";
    private static final String queryProdutoSearch = "SELECT p FROM Products p WHERE p.%s LIKE :filterVariable";
    private static final String queryJoinProdutoSearch = "SELECT p FROM Products p JOIN p.%s m WHERE m.%s = :filterVariable";

    @Inject
    EntityManager em;

    public List<Alarm> getAlertProducts(){
        List<Products> productsList = em.createQuery(queryProdutos, Products.class).getResultList();
        List<Alarm> outputList = new ArrayList<>();

        for (Products product: productsList) {
            if(product.getQuantity()<10){
                if(product.getQuantity()==0) {
                    outputList.add(new Alarm(product,0));
                }else{
                    outputList.add(new Alarm(product,1));
                }
            }
        }
        return outputList;
    }

    public List<HashMap<String,Object>> getResults(String query){
        List<HashMap<String,Object>> outputList = new ArrayList<>();
        List<Products> getListaProdutos = null;
        String formattedQuery = "";
        String parameterkey ="filterVariable";
        String parameterValue ="";

        String[] getFlags = query.split(":");
        switch (getFlags[0].toLowerCase()){
            case "nome":
                formattedQuery = String.format(queryProdutoSearch,"name");
                parameterValue =getFlags[1].trim();
                break;
            case "categoria":
                formattedQuery = String.format(queryJoinProdutoSearch,"refCategory","designation");
                parameterValue =getFlags[1].trim();
                break;
            case "material":
                formattedQuery = String.format(queryJoinProdutoSearch,"refMaterial","designation");
                parameterValue =getFlags[1].trim();
                break;
            default: //No flag
                formattedQuery = String.format(queryProdutoSearch,"productCode");
                parameterValue =getFlags[0];
                break;
        }

        if(!formattedQuery.isEmpty()) {
            getListaProdutos = em.createQuery(formattedQuery)
                    .setParameter(parameterkey, parameterValue)
                    .getResultList();
        }

        System.out.println(getListaProdutos);
        if(getListaProdutos!=null){
            getListaProdutos.forEach((element) -> {
                HashMap<String, Object> product = new HashMap<>();
                product.put("productCode",element.getProductCode());
                product.put("name",element.getName());
                product.put("category",element.getRefCategory().getDesignation());
                product.put("material",element.getRefMaterial().getDesignation());
                product.put("quantity",element.getQuantity());
                product.put("price",element.getPrice());
                outputList.add(product);
            });
        }

        System.out.println(outputList);

        return outputList;
    }

    public Products persistProdutos(Products products){
        em.persist(products);
        return products;
    }
}
