import { Component, OnInit } from '@angular/core';
import { GroupTreeService } from '../group-tree.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  title = 'Angular Service app';
  itemsPerRow = 4;
  rows:any[];
  employeesInfo: any[];
  constructor(public groupTreeService: GroupTreeService) { }
  getAllEmployees() {
    this.groupTreeService.getAllEmployees()
      .subscribe((result: any) => {
       this.employeesInfo = result;
       this.rows = Array.from(Array(Math.ceil(this.employeesInfo.length / this.itemsPerRow)).keys());
      },
      (error) => {
        console.log('done employees method');
      });
      
   }
  ngOnInit() {
    this.getAllEmployees();
  }
}
