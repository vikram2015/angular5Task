import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
  studentDetails = {};
  constructor(private _http: Http) { }

  saveLogin(parameter) {
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post('/login/saveAdminLogin', parameter).map(function (data) {
      var newData = data.json();

      return newData;
    });
  }


  getLogin() {
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.get('getAdminLogin').map(function (data) {
      return data;
    });
  }



  checkLogin(parameter) {

    // const headers = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post('/login/checkAdminLogin', parameter).map(function (data) {
      var newData = data.json();
      this.studentDetails = newData.data;
      if (newData.success == true) {
        localStorage.setItem("loginData", newData.data._id);
      } else {
        return newData;
      }
      return newData;
    });
  }


}
