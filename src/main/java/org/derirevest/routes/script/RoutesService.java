package org.derirevest.routes.script;

import org.derirevest.routes.model.Result;
import org.derirevest.routes.model.Route;
import org.derirevest.routes.model.Routes;
import org.derirevest.routes.model.VueRoute;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class RoutesService {
    private static final String queryRoutes = "select r from Routes r ORDER BY ref_route_group ASC";

    @Inject
    EntityManager em;

    public Result getRoutes(){
        List<Routes> listaRouter = em.createQuery(queryRoutes, Routes.class).getResultList();
        List<Route> basicRoutes = new ArrayList<Route>();
        List<VueRoute> vueRoutes = new ArrayList<VueRoute>();

        //Basic
        for (Routes routes: listaRouter) {
            int routeGroupID = routes.getRef_route_group().getId();
            basicRoutes.add(new Route(routes.getPath(), routes.getComponent(), routes.getIcon(), routes.getTitle(), routeGroupID));
            if(vueRoutes.size()<routeGroupID) {
                VueRoute currentRoutesIteration = new VueRoute();
                currentRoutesIteration.setTitle(routes.getTitle());
                currentRoutesIteration.setDescription(routes.getRef_route_group().getDescription());
                vueRoutes.add(currentRoutesIteration);
            }
        }

        for (Route route: basicRoutes) {
            int vueRouterIndex = route.getRouteGroup()-1;
            if(vueRoutes.get(vueRouterIndex) != null) {
                vueRoutes.get(vueRouterIndex).addLinkSubLink(route);
            }
        }

        return new Result(basicRoutes,vueRoutes);
    }


    public Routes persistRoutes(Routes routes){
        em.persist(routes);
        return routes;
    }
}
