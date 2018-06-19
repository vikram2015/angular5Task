import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { StudentService } from '../student.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  formData = {};
  newdata = {};
  studentData = {};
  queOne: Boolean;
  queTwo: Boolean;
  queThree: Boolean;
  queFour: Boolean;
  queFive: Boolean;
  rank = 0;

  constructor(private _studentService: StudentService) { }

  questionDetails = function () {

    for (var rankCalculate in this.formData) {
      if (rankCalculate) {
        this.rank++;
      }
    }

    this.newdata = {
      _id: this.studentData._id,
      studentName: this.studentData.studentName,
      rank: this.rank,
      studentClass: this.studentData.studentClass,
      userId: this.studentData.userId,
      isStudent: this.studentData.isStudent,
      questionRecord: this.formData
    }

    this._studentService.updateStudent(this.newdata).subscribe((data) => {
      console.log(data);
    })

  }

  ngOnInit() {
    var dat = localStorage.getItem("loginData");
    let id = dat;
    this._studentService.getStudentDetails(id).subscribe((data) => {
      this.studentData = data.data;
      if (data.data) {
        if (data.data.questionRecord) {
          if (data.data.questionRecord.queOne) {
            this.queOne = true;
          } else {
            this.queOne = false;
          }
          if (data.data.questionRecord.queTwo) {
            this.queTwo = true;
          } else {
            this.queTwo = false;
          }
          if (data.data.questionRecord.queThree) {
            this.queThree = true;
          } else {
            this.queThree = false;
          }
          if (data.data.questionRecord.queFour) {
            this.queFour = true;
          } else {
            this.queFour = false;
          }
        }
      }
    })
  }



}