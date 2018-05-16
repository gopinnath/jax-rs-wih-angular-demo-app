package ind.gopinnath.example.endpoint;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;

import ind.gopinnath.example.bean.Employee;
import ind.gopinnath.example.service.EmployeeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@Path("/employees")
@Api(value = "/employees", description = "Employee Resources that is used retrieve the Employee Information.")
public class EmployeeResource {

	private static final Logger LOGGER = Logger.getLogger(EmployeeResource.class.getName());
	
	@Autowired
	private EmployeeService employeeService;
	
	@GET
	@Path("/group/{group}")
	@Consumes(MediaType.APPLICATION_JSON)
	@ApiOperation(
	        value = "Get operation that return the List of employees for Selected Group.",
	        notes = "Get operation that return the List of employees for Selected Group.",
	        response = Employee.class,
	        responseContainer = "List"
    )
	public Response findEmployeesByGroup(
			@ApiParam(value = "group", required = true)
			@PathParam("group") String group,
			@QueryParam("refreshFlag") String refreshFlag)	{
		LOGGER.info("Inside findEmployeesByGroup..");
		List<Employee> employees = new ArrayList<Employee>();
		try	{
			employees = employeeService.findEmployeesByGroup(group,Boolean.valueOf(refreshFlag));
		}catch(RuntimeException exception)	{
			LOGGER.log(Level.SEVERE,"Could not retrieve Employees by Group" + group,exception);
			return Response.serverError().entity("Could not retrieve Employees by Group" + group).build();
		}
		return Response.ok(employees).build();
	}
}
