import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { StudentFormComponent } from './student-form/student-form.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'createForm', component: StudentFormComponent },
  
//   { path: 'contacts/add', component: addContactsComponent },
  
//   {
//      path: 'payment',
//       component: PaymentComponent,
//       children:[
//         {
//         path:'success',
//         component:PaymentComponent
//         }
//       ]
    
//     },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],  
  declarations: []
})



export class AppRoutingModule { }
