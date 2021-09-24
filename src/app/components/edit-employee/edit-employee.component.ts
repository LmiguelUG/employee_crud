import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute}  from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService }            from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {

  employee_form:FormGroup;
  id_employee:any;

  constructor( 
    private activate_route:ActivatedRoute,
    private crud_service:CrudService,
    public  formulary:FormBuilder,
    private router:Router
  ) {
      this.id_employee = this.activate_route.snapshot.paramMap.get('id');
      this.crud_service.Get_Employee(this.id_employee).subscribe(
        response => {
          console.log(response);
          this.employee_form.setValue({
            name:  response[0]['name'], 
            email: response[0]['email'] 
          });
        }
      );

      this.employee_form = this.formulary.group({ name: [''], email: [''] });
  }

  ngOnInit(): void {
  }

  seend_data():any{
    this.crud_service.Update_Employee(this.id_employee, this.employee_form.value).subscribe(()=>
      this.router.navigateByUrl('/list-employee'));
  }



}
