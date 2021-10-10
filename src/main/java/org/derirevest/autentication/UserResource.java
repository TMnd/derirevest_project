package org.derirevest.autentication;

import io.quarkus.security.identity.SecurityIdentity;
import org.derirevest.autentication.model.User;
import org.eclipse.microprofile.jwt.JsonWebToken;
import org.jose4j.json.internal.json_simple.JSONObject;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.*;

@Path("/api/users")
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {
    // https://www.youtube.com/watch?v=F_VbzqqqRq8

    @Inject
    SecurityIdentity securityIdentity;
    @Inject
    User loggedUser;
    @Inject
    JsonWebToken jwt;

    @GET
    @Path("/me2")
    @RolesAllowed("user")
    public String teste(){
        if(!securityIdentity.isAnonymous()){
            return jwt.getRawToken();
        }
        return "";
    }

    @GET
    @Path("/me")
    @RolesAllowed("user") //TODO: estudar esta parte
    public Map<String,String> me() {
        String username = jwt.getClaim("name");
        String email = jwt.getClaim("email");

        JSONObject jsonObject = new JSONObject(jwt.getClaim("realm_access"));
        String real_access = jsonObject.get("roles").toString().replaceAll("\\[|\\]|\"", "");

        String roles = securityIdentity.getRoles().toString().replaceAll("\\[|\\]", "");
        List<String> roleList = new ArrayList<>(Arrays.asList(roles.split(",")));
        roleList.replaceAll(String::trim);

        roleList.remove(real_access);

        loggedUser.setNome(username);

        return Map.of(
                "username",username,
                "email",email,
                "realm_access",real_access,
                "role",roleList.toString()
        );
    }

    //admin

    //client (para apagar o botão de menu)
}
