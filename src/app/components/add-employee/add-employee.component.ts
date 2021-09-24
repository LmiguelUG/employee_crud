import { Component, OnInit }      from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService }            from 'src/app/service/crud.service';
import { Router }                 from '@angular/router';

@Component({
  selector:    'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls:  ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  // Atributo
  employee_form:FormGroup;

  constructor ( 
    public  formulary:FormBuilder, 
    private crud_service:CrudService,
    private router:Router
    
  ) {
    this.employee_form = this.formulary.group({ name:[''], email:[''] });
  }

  ngOnInit(): void { 
    
  }

  sendData(): any {
    this.crud_service.Add_Employee(this.employee_form.value).subscribe();
    this.router.navigateByUrl('/list-employee');
  }

}
