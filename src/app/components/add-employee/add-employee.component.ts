import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm:FormGroup;
  constructor( public formulary:FormBuilder ) {
    this.employeeForm = this.formulary.group({
      name:[''],
      email:['']
    });
  }

  ngOnInit(): void {
  }

  sendData(): any {
    console.log('Me presionaste');
    console.log(this.employeeForm.value);

  }

}
