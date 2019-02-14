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

import logic.ServiceImpl;;

@Path("/words")
public class Paths {
	
	@Inject
	private ServiceImpl service;
	
	@Path("/AddWord")
	@POST
	@Produces({ "application/json" })
	public String addMovie(String movie) {
		return service.createEntry(movie);
	}
	
	@Path("/getAWord/{id}")
	@GET
	@Produces({ "application/json" })
	public String getAllWords() {
		return service.readEntry();
	}
	
	@Path("/updateWord/{id}")
	@PUT
	@Produces({"application/json"})
	public String updateWord(@PathParam("id") Long id, String account)
	{
		return service.updateWord(id, account);
	}
	
	@Path("/deleteWord/{id}")
	@DELETE
	@Produces({"application/json"})
	public String deleteWord(@PathParam("id") Long id)
	{
		return service.deleteWord(id);
	}

}
