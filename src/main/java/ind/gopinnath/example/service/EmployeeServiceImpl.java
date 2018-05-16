package ind.gopinnath.example.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Component;

import ind.gopinnath.example.bean.Employee;


@Component("employeeService")
public class EmployeeServiceImpl implements EmployeeService {

	private HashMap<String,List<Employee>> employeeGroupMap = new HashMap<String,List<Employee>>();
	
	@Override
	public List<Employee> findEmployeesByGroup(String group,Boolean refreshFlag) {
		if(!employeeGroupMap.containsKey(group) || refreshFlag)	{
			List<Employee> employees = buildEmployees();
			employeeGroupMap.put(group,employees);
		}
		return employeeGroupMap.get(group);
	}

	private List<Employee> buildEmployees() {
		List<Employee> employees = new ArrayList<Employee>();
		employees.add(new Employee("0","1","Ram","Kumar","Manager",false,Arrays.asList("2","3","4","5","6")));
		employees.add(new Employee("1","2","Shyam","Kumar","Lead",false,Arrays.asList("7","8")));
		employees.add(new Employee("1","3","Ravi","Kumar","Senior Programmer",false,Arrays.asList()));
		employees.add(new Employee("1","4","Pavan","Kumar","Senior Programmer",false,Arrays.asList()));
		employees.add(new Employee("1","5","Bharat","Kumar","Senior Programmer",false,Arrays.asList()));
		employees.add(new Employee("1","6","Gaurav","Kumar","Senior Programmer",false,Arrays.asList()));
		employees.add(new Employee("2","7","Saurav","Kumar","Programmer",false,Arrays.asList()));
		employees.add(new Employee("2","8","Prem","Kumar","Programmer",false,Arrays.asList()));
		employees.add(new Employee("0","9","Ratan","Kumar","Manager",false,Arrays.asList()));
		return employees;
	}
}
