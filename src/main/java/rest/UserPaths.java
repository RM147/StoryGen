package rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.apache.log4j.Logger;

import logic.UserServiceInterface;

@Path("/users")
public class UserPaths {
	
	@Inject
	private UserServiceInterface service;
	
	@Path("/getUser/{id}")
	@GET
	@Produces({ "application/json" })
	public String readUser(@PathParam("id") Long id) {
		return service.readUser(id);
	}
	
	@Path("/addUser")
	@POST
	@Produces({ "application/json" })
	public String addUser(String movie) {
		return service.addUser(movie);
	}
	
	@Path("/updateUser/{id}")
	@PUT
	@Produces({ "application/json" })
	public String updateUser(@PathParam("id") Long id, String genre) {
		return service.updateUser(genre, id);
	}

	@Path("/deleteUser/{id}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteUser(@PathParam("id") Long id) {
		return service.deleteUser(id);
	}

}
