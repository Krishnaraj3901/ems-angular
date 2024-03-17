import { Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyEmployees } from 'src/model/myEmployees';

@Component({
  selector: 'app-employee-main',
  templateUrl: './employee-main.component.html',
  styleUrls: ['./employee-main.component.css']
})
export class EmployeeMainComponent implements OnInit {

  searchKey:string='';

  allEmployees:any=[];
  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.getAllEmployees()



  }
  getAllEmployees(){
  this.api.getAllEmployees().subscribe((data:MyEmployees)=>{
    console.log(data);
    this.allEmployees=data;
  })
  }

  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
  }

  deleteEmployee(employeeId:any){
    this.api.deleteEmployee(employeeId).subscribe((result:any)=>{
      alert("employee details deleted successfully")
      this.getAllEmployees()
    })
  }
  
}
