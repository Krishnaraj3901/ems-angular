import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employee:any=[]
  employeeId:string=''
  constructor (private activatedRoute:ActivatedRoute,private api:ApiService){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      console.log(data.Id);
      this.employeeId=data.Id;
      this.api.viewEmployeeDetails(this.employeeId).subscribe((result:any)=>{
        console.log(result);
        this.employee=result;
        
      })
    })
  }
}
