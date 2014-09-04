package es.insa.curso.web;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

@Path("/")
public class ServicioREST {

	// ESTO VA A SER UN SERVICIO REST CRADO CON JAX-RS
	// PERO JAX-RS DE POR SI ES SOLO UNA INTERFAZ
	// JERSEY ES UNA VERSI�N DE JAX-RS
	// PERO    SE CONFIGURA CON ANOTACIONES
	
	public ServicioREST() {
		// TODO Auto-generated constructor stub
	}
	
	@GET
	@Path("/saludar")
	public String saludar(@QueryParam("nombre") String nombre){
		return "Hola " + nombre;
		}
	
	@POST
	@Path("/adios/{nombre}")
	public String despedirse(@PathParam("nombre") String nombre){
		return "Adios " + nombre;
		} 
	}
