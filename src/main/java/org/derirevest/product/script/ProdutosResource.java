package org.derirevest.product.script;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import org.jboss.resteasy.annotations.jaxrs.PathParam;
import org.jboss.resteasy.annotations.jaxrs.QueryParam;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/produtos/")
public class ProdutosResource {

    @Inject
    ProductsService produtosService;

    @GET
    @Path("/alerts")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJSONProductAlerts() {
        return Response.ok(produtosService.getAlertProducts()).build();
    }

    @GET
    @Path("/searchProduct/{searchQuery}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProductList(@PathParam String searchQuery) {
        return Response.ok(produtosService.getResults(searchQuery)).build();
    }
}
