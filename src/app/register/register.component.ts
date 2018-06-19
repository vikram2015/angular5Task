import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData = {};
  constructor(private registerationService:RegisterService, private _router: Router) { }

  studentRegisteration(){
    this.registerationService.saveStudent(this.formData).subscribe((data)=>{
      if(data.success){
        this._router.navigateByUrl('');
      }
    })
  }

  ngOnInit() {
  }

}
