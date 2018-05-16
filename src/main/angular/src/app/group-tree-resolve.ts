import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Employee } from './employee';
import { GroupTreeService } from './group-tree.service';


@Injectable()
export class GroupTreeServiceResolver implements Resolve<Observable<Employee[]>> {
  constructor(private service : GroupTreeService) {}

  resolve() {
    return this.service.getAllEmployees();
  }
}