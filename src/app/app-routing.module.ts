import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

const routes: Routes = [
  {
    path:'',redirectTo:'employeeMain',pathMatch:'full'
  },
  {
    path:'employeeMain',component:EmployeeMainComponent
  },
  {
    path:'employeeMain/employeeAdd',component:EmployeeAddComponent
  },
  {
    path:'employeeMain/employeeView/:Id',component:EmployeeViewComponent
  },
  {
    path:'employeeMain/employeeEdit/:Id',component:EmployeeEditComponent
  },
  {
    path:'**',component:PagenotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
