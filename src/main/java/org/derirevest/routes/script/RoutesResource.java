package org.derirevest.routes.script;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/api/web/routes")
public class RoutesResource {

    @Inject
    RoutesService routesService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJSONRoutes(){
        return Response.ok(routesService.getRoutes()).build();
    }
}
