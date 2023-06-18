import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PacienteComponent } from './paciente/paciente.component';
import { DoctorComponent } from './doctor/doctor.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    PagesComponent,
    PacienteComponent,
    DoctorComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    PagesComponent,
    PacienteComponent,
    DoctorComponent
  ],
})
export class PagesModule { }
