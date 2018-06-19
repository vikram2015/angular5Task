import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  constructor(private _http:Http) { }

  saveStudent(parameter){

    if(parameter.password === parameter.cnfPassword){
    return this._http.post('/student/registerNewStudent',parameter).map((data)=>{
      var newData = data.json();
      return newData;
    })
    }else{
      alert('Password and confirm password not matched');
    }
  }

}
