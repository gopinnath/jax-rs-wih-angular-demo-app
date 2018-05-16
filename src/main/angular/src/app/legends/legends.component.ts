import { Component, OnInit } from '@angular/core';
import { GroupTreeService } from '../group-tree.service';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {

  constructor(private service : GroupTreeService) { }

  ngOnInit() {
  }

  refreshLdap() {
    this.service.refreshLdapData();
  }
}
