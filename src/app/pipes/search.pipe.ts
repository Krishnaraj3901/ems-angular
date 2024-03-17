import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allEmployees:any[],searchTerm:string,propsName:string): any[] {
    const result:any[]=[];
    if(!allEmployees||searchTerm==''||propsName==''){
      return allEmployees
    }
    allEmployees.forEach((employee:any)=>{
      if(employee[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      result.push(employee)
    })
    
    return result
  
  }

}
