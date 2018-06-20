import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { StudentComponent } from './student/student.component';
// import { MemberComponent } from './member/member.component';
// import { ContactsComponent } from './contacts/contacts.component';
// import { ContactsComponentUpdate } from './contacts/update/contactUpdate.component';
// import { addContactsComponent } from './contacts/addContact/addContact.component';
// import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'success', component: SuccessComponent },
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
