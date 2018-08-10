import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModel } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule }  from './app-routing.module';
import { StudentComponent } from './student/student.component';
import { LoginService } from './login.service';
import { StudentService } from './student.service';
import { AdminServiceService } from './admin-service.service';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';
import { SuccessComponent } from './success/success.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentFormService } from './student-form.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    AdminComponent,
    RegisterComponent,
    SuccessComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,StudentService,AdminServiceService,RegisterService,StudentFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
