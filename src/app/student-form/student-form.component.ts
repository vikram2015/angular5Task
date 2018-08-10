import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { StudentFormService } from '../student-form.service';
import { NgToolkitError } from '../../../node_modules/@angular/cli/models/error'


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  newFeeType = {};
  classRange = 1;
  formData = {};
  optionsSelected: Boolean
  finalRecord = {};
  submitButton: Boolean;

  studentForm: FormGroup;

  constructor(private studentFormService: StudentFormService, private _router: Router) { }

  formRecord = [{ Question: '' }];
  i = 0;
  optionSelected() {
    this.optionsSelected = true;
    this.submitButton = true;
  }
  add() {
    if (this.formRecord[this.i].Question) {
      this.formRecord.push({ Question: '' });
      this.i++;
    } else {
      if (this.optionsSelected == true) {
        alert('Question is required');
      } else {
        alert('Select The Class Range First');
      }
    }
  }

  clear(index) {
    this.formRecord.splice(index, 1);
    this.i--;

  }

  nullData: Boolean;
  submit() {
    this.nullData = true;
    for (var i = 0; i < this.formRecord.length; i++) {
      if (this.formRecord[i].Question == "") {
        this.nullData = false;
      }
    }
    if (this.nullData) {
      this.finalRecord = {
        classNewOption: this.formData,
        newQuestions: this.formRecord
      }
      this.studentFormService.saveNewForm(this.finalRecord).subscribe((data) => {
        if (data.success) {
          this._router.navigateByUrl('admin');
        }
      })
    } else {
      alert('Question is Mandatory');
      var err = new NgToolkitError("Question is required");
      // alert('Question is required');
    }
  }

  Back() {
    this._router.navigateByUrl('admin');
  }

  ngOnInit() {
    this.submitButton = true;
    this.optionsSelected = false;
  }
}


  //    formDetails(){
  //   // console.log(this.studentForm)
  //   // console.log(this.que)
  //   console.log(this.studentForm.get('hobbies').value)
  // }


// ngOnInit() {

    // this.studentForm = new FormGroup({
    //   question:new FormControl('john doe', [
    //     Validators.required,
    //     Validators.minLength(8),
    //     Validators.maxLength(20)
    //   ]),
    //   answer:new FormControl(),
    //   adress:new FormGroup({
    //     line1:new FormControl('marathahalli'),
    //   city:new FormControl(),
    //   state:new FormControl(),
    //   }),
    // hobbies:new FormArray([])

    // })

  // }


// addHobbies(){
  //   (<FormArray>this.studentForm.get('hobbies')).push(new FormControl());
  // }

  // deleteHobbies(index){
  //   (<FormArray>this.studentForm.get('hobbies')).removeAt(index);
  // }

  // addAnswer(){
  //   (<FormArray>this.studentForm.get('answers')).push(new FormControl());
  // }

  // deleteAnswer(ind){
  //   (<FormArray>this.studentForm.get('answers')).removeAt(ind);
  // }


  // get question(){
  //   return this.studentForm.get('question');
  // }
