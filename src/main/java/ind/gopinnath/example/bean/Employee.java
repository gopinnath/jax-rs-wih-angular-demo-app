package ind.gopinnath.example.bean;

import java.util.ArrayList;
import java.util.List;

public class Employee {

	private String managerEmployeeId;
	private String employeeId;
	private String firstName;
	private String lastName;
	private String designation;
	private boolean partOfGroup;
	private List<String> directReportsEmployeeIds = new ArrayList<String>();
	
	public Employee() {
		super();
	}	
	
	
	public Employee(String managerEmployeeId, String employeeId, String firstName, String lastName, String designation,
			boolean partOfGroup, List<String> directReportsEmployeeIds) {
		super();
		this.managerEmployeeId = managerEmployeeId;
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.designation = designation;
		this.partOfGroup = partOfGroup;
		this.directReportsEmployeeIds = directReportsEmployeeIds;
	}
	
	public String getManagerEmployeeId() {
		return managerEmployeeId;
	}
	public void setManagerEmployeeId(String managerEmployeeId) {
		this.managerEmployeeId = managerEmployeeId;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public boolean isPartOfGroup() {
		return partOfGroup;
	}
	public void setPartOfGroup(boolean partOfGroup) {
		this.partOfGroup = partOfGroup;
	}
	public List<String> getDirectReportsEmployeeIds() {
		return directReportsEmployeeIds;
	}
	public void setDirectReportsEmployeeIds(List<String> directReportsEmployeeIds) {
		this.directReportsEmployeeIds = directReportsEmployeeIds;
	}
	
}
