import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminServiceService {

  constructor(private _http: Http) { }

  getStudent(parameter) {
    return this._http.get('/student/getTopStudents', { params: { classRange: parameter } }).map(function (data) {
      var newData = data.json();
      return newData;
    });
  }

  getTotalStudent(parameter) {
    return this._http.get('/student/getTotalStudents', { params: { classRange: parameter } }).map(function (data) {
      var newData = data.json();
      return newData;
    });
  }

  getTotalForm(parameter) {
    return this._http.get('/newForm/getTotalForms', { params: { classRange: parameter } }).map(function (data) {
      var newData = data.json();
      return newData;
    });
  }

}
