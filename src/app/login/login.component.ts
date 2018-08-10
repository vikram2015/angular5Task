import { Component, OnInit } from '@angular/core';
// import { ContactsService } from '../../contacts.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: String;
  password: String;
  isAdmin: Boolean;
  parameter = {};
  formData = {};
  class: Array<any>;
  selectedOption: String;
  selectedStudent: Boolean;
  loginForm: FormGroup;

  constructor(private _LoginService: LoginService, private _router: Router) { }


  /**
   * This function is for getting all the login details
   */
  userLogin() {
    this._LoginService.getLogin().subscribe((data) => {
    })
  }

  /**
   * This function is for save the new login details
   */
  saveNewLogin() {
    this.parameter = {
      userName: this.userName,
      password: this.password,
      isAdmin: true
    }

    this._LoginService.saveLogin(this.parameter).subscribe((data) => {
      if (data.success) {
        this._router.navigateByUrl('admin');
      }
    })
  }

  /**
   * This function is for checking the login details
   */
  checkLoginDetails() {
    this._LoginService.checkLogin(this.formData, this.selectedOption).subscribe((data) => {
      if (data.success) {
        if (data.data.isAdmin == true) {
          this._router.navigateByUrl('admin');
        } else {
          if (data.data.isStudent == true) {
            this._router.navigateByUrl('student');
          } else {
            alert('No user found');
          }
        }
      } else {
        alert('User Name and Password not match');
      }
    });
  };

  register() {
    this._router.navigateByUrl('register');
  }



  ngOnInit() {

    // this.loginForm = new FormGroup({
    //     user: new FormControl('Hello',[
    //       Validators.required
    //     ]),
    // })

  }

}
