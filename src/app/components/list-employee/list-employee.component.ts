import { Component, OnInit } from '@angular/core';
import { CrudService }       from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees:any;

  constructor(
    private crud_service:CrudService
  ) { }

  ngOnInit(): void {
    this.crud_service.Get_employees().subscribe(response => {
      this.employees = response;
    });
  }

  clear_log(id:any,index_:any) {
      console.log(id);
      console.log(index_);

      if(window.confirm("sure you want to delete employee ?")) {
        this.crud_service.Delete_Employee(id).subscribe((response) => {
          this.employees.splice(index_, 1);
        });
      }
        
  }

}
