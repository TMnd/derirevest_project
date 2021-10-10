package org.derirevest.delivery.script;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/entregas")
public class DeliveryResource {

    @Inject
    DeliveryService deliveryService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJSONEntregas() {
        return Response.ok(deliveryService.getEntregas()).build();
    }
}
