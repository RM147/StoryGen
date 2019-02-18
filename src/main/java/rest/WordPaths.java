package rest;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.apache.log4j.Logger;

import logic.ServiceInterface;

@Path("/word")
public class WordPaths {

	@Inject
	private ServiceInterface service;

	@Path("/getWord/{id}")
	@GET
	@Produces({ "application/json" })
	public String readWord(@PathParam("id") Long id) {
		return service.readWord(id);
	}

	@Path("/addWord")
	@POST
	@Produces({ "application/json" })
	public String addWord(String movie) {
		return service.addWord(movie);
	}
	
	@Path("/updateWord/{id}")
	@PUT
	@Produces({ "application/json" })
	public String updateWord(@PathParam("id") Long id, String genre) {
		return service.updateWord(genre, id);
	}

	@Path("/deleteWord/{id}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteWord(@PathParam("id") Long id) {
		return service.deleteWord(id);
	}

	public void setService(ServiceInterface service) {
		this.service = service;
	}

}