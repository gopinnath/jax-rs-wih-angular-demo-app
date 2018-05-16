package ind.gopinnath.example.service;

import java.util.List;

import ind.gopinnath.example.bean.Employee;


public interface EmployeeService {

	List<Employee> findEmployeesByGroup(String group,Boolean refreshFlag);

}
