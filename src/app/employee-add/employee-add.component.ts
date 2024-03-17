import { Component } from '@angular/core';
import { MyEmployees } from 'src/model/myEmployees';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  // employeeName:string=''
  employee:MyEmployees={}

  constructor(private api:ApiService,private router:Router){}

  addEmployee(){
    this.api.addEmployee(this.employee).subscribe((result:any)=>{
      this.router.navigateByUrl('')
    })
  }
}
