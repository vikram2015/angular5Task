import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class StudentService {

  constructor(private _http: Http) { }

  updateStudent(parameter) {

    return this._http.post('/student/updateStudentRecord', parameter).map(function (data) {
      var newData = data.json();

      return newData;
    });
  }

  getStudentDetails(parameter) {
    return this._http.get('/student/getStudentDetails', { params: { id: parameter } }).map(function (data) {
      var newData = data.json();

      return newData;
    });
  }

  getForm(studentClass) {
    var studClass = studentClass.studentClass;

    return this._http.get('/student/getClassWiseForm', { params: { studClass } }).map(function (data) {
      var newData = data.json();
      if (newData.success) {
        return newData.data;
      }
    });
  }
}
