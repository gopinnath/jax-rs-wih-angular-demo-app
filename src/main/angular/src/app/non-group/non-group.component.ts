import { Component, OnInit } from '@angular/core';
import { GroupTreeService } from '../group-tree.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-non-group',
  templateUrl: './non-group.component.html',
  styleUrls: ['./non-group.component.css']
})
export class NonGroupComponent implements OnInit {
  groupEmployees : Employee[];
  nonGroupEmployees : Employee[];
  employeesInfo: any[];
  constructor(public groupTreeService: GroupTreeService) { }
  getAllEmployees() {
    this.groupTreeService.getAllEmployees()
      .subscribe((result: any) => {
       this.employeesInfo = result;
       this.nonGroupEmployees = this.employeesInfo.filter(employee => !employee.partOfGroup);
       this.groupEmployees = this.employeesInfo.filter(employee => employee.partOfGroup);
      },
      (error) => {
        console.log('done employees method');
      });
      
   }
  ngOnInit() {
    this.getAllEmployees();
  }

}
