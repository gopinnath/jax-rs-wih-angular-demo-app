import { Injectable } from '@angular/core';

import { Http,Response, RequestOptionsArgs } from '@angular/http';

import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

import { Employee } from './employee';

@Injectable()
export class GroupTreeService {

  constructor(private http: Http) { }

  getAllEmployees(): Observable<Employee[]> {
    try {
      return this.http.get('/jax-rs-wih-angular-demo-app/api/employees/group/random').map(this.extractData).catch(this.handleError) ;
    } catch (error)     { 
      console.log(error); 
    }
  }

  refreshLdapData(): Observable<Employee[]> {
    try {
      let options:RequestOptionsArgs = { params: {refreshFlag : true} };
      return this.http.get('/jax-rs-wih-angular-demo-app/api/employees/group/random', options).map(this.extractData).catch(this.handleError) ;
    } catch (error)     { 
      console.log(error); 
    }
  }

  extractData(res: Response): Observable<Employee[]> {
    const body = res.json();
    return body;
  }

  handleError(error: any) { 
    return Observable.throw(error); 
  }
}
