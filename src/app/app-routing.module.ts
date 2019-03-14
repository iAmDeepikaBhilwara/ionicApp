import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add.customer/add.customer.component';
import { ListCustomerComponent } from './list.customer/list.customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { StudentComponent } from './student/student.component';
import { ListStudentComponent } from './list.student/list.student.component';
import { AddStudentComponent } from './add.student/add.student.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', component:LoginComponent},
  { path: 'dashboard',component:DashboardComponent},
  { path: 'about',component:AboutComponent },
  { path: 'customer',component:CustomerComponent},
  { path: 'add-customer',component:AddCustomerComponent},
  { path: 'list-customer',component:ListCustomerComponent},
  { path: 'editCustomer/:id',component:EditCustomerComponent},
  { path: 'student',component:StudentComponent},
  { path: 'add-student', component:AddStudentComponent},
  { path: 'list-student',component:ListStudentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
