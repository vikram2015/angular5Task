import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminServiceService {

  constructor(private _http:Http) { }

  getStudent(){
    return this._http.get('/student/getTopStudents').map(function (data) {
      var newData = data.json();

      return newData;
    });
  }

}
