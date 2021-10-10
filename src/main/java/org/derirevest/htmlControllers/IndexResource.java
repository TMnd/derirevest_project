package org.derirevest.htmlControllers;

import io.quarkus.qute.CheckedTemplate;
import io.quarkus.qute.TemplateInstance;
import org.derirevest.autentication.model.User;
import org.derirevest.routes.model.Route;
import org.derirevest.routes.script.RoutesService;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.Calendar;
import java.util.List;


@Path("/historico")
public class IndexResource {
    @Inject
    User loggedUser;
    @Inject
    RoutesService routesService;

    @ConfigProperty(name = "quarkus.application.name")
    String message;
    @ConfigProperty(name = "quarkus.application.version")
    String version;
    @ConfigProperty(name = "quarkus.application.autor")
    String autor;


    @CheckedTemplate
    public static class Templates {
        public static native TemplateInstance index(String applicationName,
                                                    String applicationVersion,
                                                    String applicationAutor,
                                                    User user,
                                                    Integer currentYear,
                                                    String historicContext,
                                                    List<Route> headerMenu,
                                                    Boolean hasMenu);
    }

    @GET
    @Produces(MediaType.TEXT_HTML)
    public TemplateInstance get( @QueryParam("type") String historicType) {
        int currentYear = Calendar.getInstance().get(Calendar.YEAR);
        List<Route> routeList = routesService.getRoutes().getRouteList();
        Boolean hasMenu = loggedUser.getRoles().contains("ROUTE_REPORTS");

        if(historicType == null){
            historicType = "base";
        }

        return Templates.index(message, version, autor, loggedUser, currentYear, historicType, routeList, hasMenu);
    }
}
