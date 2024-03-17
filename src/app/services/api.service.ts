import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyEmployees } from 'src/model/myEmployees';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //function for getting all employees details
  getAllEmployees():Observable<MyEmployees>{
    return this.http.get('http://localhost:3000/employees')
  }
  //api call for add employee
 addEmployee(employeeBody:any){

  return this.http.post('http://localhost:3000/employees',employeeBody)
 } 

 viewEmployeeDetails(employeeId:string){
  return this.http.get(`http://localhost:3000/employees/${employeeId}`)
 }
 updateEmployee(employeeId:any,employeeBody:any){
  return this.http.put(`http://localhost:3000/employees/${employeeId}`,employeeBody)
 }

 deleteEmployee(employeeId:any){
  return this.http.delete(`http://localhost:3000/employees/${employeeId}`)
 }
}
