import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyEmployees } from 'src/model/myEmployees';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employee:MyEmployees={}
  employeeId:any='';
  constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private route:Router){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.Id);
      
      this.employeeId=data.Id;
      //call api for getting particular contact details
      // this.api.getAllEmployees(this.employeeId)
      this.api.viewEmployeeDetails(this.employeeId).subscribe((result:any)=>{
        console.log(result);
        this.employee=result
      })
    })
  }
  updateEmployee(){
    this.api.updateEmployee(this.employeeId,this.employee).subscribe((result:any)=>{
      console.log(result);
      this.route.navigateByUrl('/employeeMain')
      
    })
  }

}
