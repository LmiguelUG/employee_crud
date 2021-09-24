// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddEmployeeComponent  } from "./components/add-employee/add-employee.component";
import { EditEmployeeComponent } from "./components/edit-employee/edit-employee.component";
import { ListEmployeeComponent } from "./components/list-employee/list-employee.component";

const routes: Routes = [
    // redireccionamiento por defecto
    {path: '',pathMatch:'full', redirectTo:'list-employee'},

    // Rutas de navegación
    {path: 'list-employee', component:ListEmployeeComponent},
    {path: 'add-employee', component:AddEmployeeComponent},
    {path: 'edit-employee/:id', component:EditEmployeeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
