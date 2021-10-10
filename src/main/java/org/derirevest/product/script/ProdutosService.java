package org.derirevest.product.script;

import org.derirevest.product.model.Produtos;
import org.derirevest.product.model.Result;
import org.jose4j.json.internal.json_simple.JSONObject;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class ProdutosService {
    private static final String queryProdutos = "select p from Produtos p";

    @Inject
    EntityManager em;

    public List<List<Result>> getAlertProducts(){
        List<Produtos> listaProdutos= em.createQuery(queryProdutos, Produtos.class).getResultList();
        List<List<Result>> outputList = new ArrayList<>();

        for (Produtos elemento: listaProdutos) {
            List<Result> results = new ArrayList<>();
            int productInventoryState = -1;
            if (elemento.getQuantidade() != null && elemento.getQuantidade() < 20) {
                if (elemento.getQuantidade() < 10 && elemento.getQuantidade() > 0) {
                    productInventoryState = 1;
                } else if (elemento.getQuantidade() <= 0) {
                    productInventoryState = 0;
                }
                results.add(new Result("data",elemento.getNome()));
                results.add(new Result("data",elemento.getQuantidade()));
                Result result = new Result();
                result.setElementType("iconObject");
                result.setProductInventoryState(productInventoryState);
                results.add(result);
                outputList.add(results);
            }
        }
        return outputList;
    }

    public Produtos persistProdutos(Produtos produtos){
        em.persist(produtos);
        return produtos;
    }
}
