import { Routes,RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import { NonGroupComponent } from './non-group/non-group.component';

import { GroupTreeService } from './group-tree.service';
import { SelectedEmployeeComponent } from './selected-employee/selected-employee.component';
import { LegendsComponent } from './legends/legends.component';
import { GroupTreeServiceResolver } from './group-tree-resolve';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'nonGroup', component: NonGroupComponent },
  { 
    path: 'employee/:selectedEmployeeId', 
    component: SelectedEmployeeComponent, 
    resolve : { 
      employeesInfo : GroupTreeServiceResolver
    }
  },
  { path: 'legends', component: LegendsComponent },  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TreeComponent,
    NonGroupComponent,
    SelectedEmployeeComponent,
    LegendsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule
  ],
  providers: [GroupTreeService,GroupTreeServiceResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
