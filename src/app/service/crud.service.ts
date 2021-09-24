import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'http://localhost/employees/';
  constructor(private my_client:HttpClient) { }

  Add_Employee(employee:Employee):Observable<any>{
    return this.my_client.post(this.API + "?insert=1", employee);
  }

  Get_employees():Observable<any> {
    return this.my_client.get(this.API)
  }

  Delete_Employee(id:any):Observable<any>{
    return this.my_client.get(this.API + "?delete="+id);
  }

  Get_Employee(id:any):Observable<any>{
    return this.my_client.get(this.API + "?consult="+id);
  }

  Update_Employee(id:any, employee_data:any):Observable<any>{
    return this.my_client.post(this.API + "?update="+id, employee_data);
    
  }

}
