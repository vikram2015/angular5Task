import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentFormService {

  constructor(private _http: Http) { }

  saveNewForm(formParameter) {
    return this._http.post('/newForm/saveFormData', formParameter).map(function (data) {
      if (data) {
        let newData = data.json();
        return newData;
      }
    })
  }

}
