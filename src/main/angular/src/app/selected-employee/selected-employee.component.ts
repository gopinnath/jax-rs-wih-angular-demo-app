import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupTreeService } from '../group-tree.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-selected-employee',
  templateUrl: './selected-employee.component.html',
  styleUrls: ['./selected-employee.component.css']
})
export class SelectedEmployeeComponent implements OnInit {

  employeesInfo: any[];

  selectedEmployeeId: string;
  selectedEmployee : Employee;
  selectedEmployeesManager : Employee;
  selectedEmployeesDirectReports : Employee[];

  itemsPerRow = 4;
  rows:any[];

  constructor(private route: ActivatedRoute,private groupTreeService: GroupTreeService) {}
  organizeEmployees() {
      this.selectedEmployee = this.employeesInfo.find(employee => employee.employeeId == this.selectedEmployeeId);
      this.selectedEmployeesManager = this.employeesInfo.find(employee => employee.employeeId == this.selectedEmployee.managerEmployeeId);
      this.selectedEmployeesDirectReports = this.selectedEmployee.directReportsEmployeeIds.map(employeeId => this.employeesInfo.find(employee => employee.employeeId === employeeId));
      if(this.selectedEmployeesDirectReports)  {
        this.rows = Array.from(Array(Math.ceil(this.selectedEmployeesDirectReports.length / this.itemsPerRow)).keys());
      }
   }
  
  ngOnInit() {
    this.selectedEmployeeId = this.route.snapshot.paramMap.get('selectedEmployeeId');
    this.employeesInfo = this.route.snapshot.data['employeesInfo'];
    this.organizeEmployees();
    this.route.params.subscribe(params => {
      console.log(params);
      this.selectedEmployeeId = params['selectedEmployeeId'];
      this.organizeEmployees();
    });
  }
}
