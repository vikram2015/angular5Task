import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { StudentService } from '../student.service';
import { LoginService } from '../login.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  PieChart: any;
  formData = {};
  newdata = {};
  studentData = {};
  studentForm: Array<any>;
  QuestionAndAnswer = [];
  showButton: Boolean;
  // queOne: Boolean;
  // queTwo: Boolean;
  // queThree: Boolean;
  // queFour: Boolean;
  // queFive: Boolean;
  rank = 0;
  savedQuestions = {};
  newQuestion = {};
  rank1: Number;
  rank2: Number;
  // answer: String;
  // StudentForm: FormGroup;
  formation = []
  insideForm = []

  constructor(private _studentService: StudentService, private _router: Router) { }

  formRecord = [];
  questionDetails = function () {

    for (var i = 0; i < this.formRecord.length; i++) {
      if (this.formRecord[i].Answer) {
        this.QuestionAndAnswer.push(this.formRecord[i]);

        if (this.rank1 && this.rank2) {
          if (this.rank1 == 0) {
            this.rank = this.rank2;
          } else {
            if (this.rank2 == 0) {
              this.rank = 0;
            } else {
              this.rank = this.rank2 - this.rank1;
            }
          }
          if (this.rank == 0) {
            this.rank = 1;
          }
        } else {
          this.rank = 0;
        }


      }
    }

    // this.newQuestion = Object.assign(this.savedQuestions, this.formData)

    this.newdata = {
      _id: this.studentData._id,
      studentName: this.studentData.studentName,
      rank: this.rank,
      studentClass: this.studentData.studentClass,
      userId: this.studentData.userId,
      isStudent: this.studentData.isStudent,
      questionRecord: this.QuestionAndAnswer
    }


    this._studentService.updateStudent(this.newdata).subscribe((data) => {
      if (data.success) {
        this._router.navigateByUrl('success');
      }
    })

  }
  answ: Array<any>
  formRec = [];
  newF = []


  // if (this.newF) {
  //     if (this.answ) {
  //       if (this.newF.length === this.answ.length) {
  //         alert('All The Questions Are Answered');
  //       } else {
  //         for (var i = 0; i < this.newF.length; i++) {
  //           try {
  //             if (this.answ[i].Question === 'undefined') {
  //               if (this.newF[i].Question !== this.answ[i].Question && !this.answ[i].Answer) {
  //                 this.insideForm.push(this.newF[i].Question);
  //                 this.formRecord.push({ Question: this.newF[i].Question });
  //               }
  //             }
  //           } catch (e) {
  //             this.insideForm.push(this.newF[i].Question);
  //             this.formRecord.push({ Question: this.newF[i].Question });
  //           }
  //         }
  //       }
  //     } else {
  //       for (var newFormDetails of this.newF) {
  //         this.insideForm.push(newFormDetails.Question);
  //         this.formRecord.push({ Question: newFormDetails.Question });
  //       }
  //     }
  //   }else{
  //     alert('No Form Found');
  //   }


  totalQuestions
  questionsAttended
  questionLeft
  questionRank
  ngOnInit() {



    // this.newF = [{ Question: "What is Your Name", answer: "abcd" }, { Question: "Where do you live", answer: "efgh" }, { Question: "this is new question", answer: "this is its answer" }]
    // this.answ = [{ Question: "What is Your Name", Answer: "vik" }]
    // this.answ = undefined;
    // this.newF = undefined;

    // if( this.answ[i].Question === 'undefined'){
    //   console.log('15151515151515')
    //   if(this.newF[i].Question !== this.answ[i].Question && !this.answ[i].Answer){
    //         console.log('10 10 10 10')
    //         this.insideForm.push(this.newF[i].Question);
    //       this.formRecord.push({ Question: this.newF[i].Question });
    //       }else{
    //         console.log('11 11 11 11 11')
    //       }
    // }else{
    //   console.log('sdgdgdfdf')
    //   this.insideForm.push(this.newF[i].Question);
    //       this.formRecord.push({ Question: this.newF[i].Question });
    // }

    //         this.formation[i] = this.newF[i]
    //         console.log(this.formation)
    //         console.log('999999999')
    //         for (var j = 0; j < this.answ.length; j++) {
    //           console.log(this.formation[i].Question)
    //           console.log(this.answ[j].Question)
    //           console.log(this.answ[j].Answer)
    //           if(this.formation[i].Question !== this.answ[j].Question && !this.answ[j].Answer){
    //                 console.log('10 10 10 10')
    //                 this.insideForm.push(this.formation[i].Question);
    //               this.formRecord.push({ Question: this.formation[i].Question });
    //               }else{
    //                 console.log('11 11 11 11 11')
    //               }
    //           console.log(this.answ[j])
    //           console.log(this.formation[i])
    //           if (this.answ[j].Answer == undefined) {
    //             console.log('66666666')
    //             this.insideForm.push(this.formation[i].Question);
    //             this.formRecord.push({ Question: this.formation[i].Question });
    //           } else {
    //             console.log('777777777')
    //             if (!this.answ[j].Answer) {

    //               console.log('555555555')
    //               console.log(this.answ[j])
    //               console.log(this.answ[j].Answer)
    //               this.insideForm.push(this.formation[i].Question);
    //               this.formRecord.push({ Question: this.formation[i].Question });
    //             }else{
    //               console.log('888888888')


    //             }
    //           }


    //         }

    //       }
    //     }
    //   } else {
    //     console.log('17 17 17 17 17 17')
    //     for (var newFormDetails of this.newF) {
    //       this.insideForm.push(newFormDetails.Question);
    //       this.formRecord.push({ Question: newFormDetails.Question });
    //     }
    //   }
    // } else {
    //   console.log('18 18 18 18 18 18 18')
    //   alert(' No Form Found');
    // }







    var dat = localStorage.getItem("loginData");
    let id = dat;
    this._studentService.getStudentDetails(id).subscribe((data) => {
      if (data.data) {
        this.studentData = data.data;
        this.rank = data.data.rank;
        this.questionRank = this.rank;
        this.answ = data.data.questionRecord;
        // this.questionsAttended = this.answ.length;

        if (this.answ) {
          this.rank1 = this.answ.length;
          this.questionsAttended = this.answ.length;
        } else {
          if (this.answ == undefined) {
            this.questionsAttended = 0;
            this.rank1 = 0;
          }
        }
        if (this.answ) {
          for (var i = 0; i < this.answ.length; i++) {
            if (this.answ[i].Answer) {
              this.QuestionAndAnswer.push(this.answ[i]);
            }
          }
        }
        this._studentService.getForm(this.studentData).subscribe((data) => {
          if (data) {
            this.studentForm = data;
            for (var i = 0; i < this.studentForm.length; i++) {
              this.formRec.push(this.studentForm[i].forms);
            }
            for (var a = 0; a < this.formRec.length; a++) {
              if (this.formRec[a].length > 1) {
                for (var b = 0; b < this.formRec[a].length; b++) {
                  this.newF.push(this.formRec[a][b])
                }
              } else {
                this.newF.push(this.formRec[a][0])
              }

              if (this.newF) {
                this.rank2 = this.newF.length;
                this.totalQuestions = this.newF.length;
              } else {
                if (this.newF == undefined) {
                  this.totalQuestions = 100;
                  this.rank2 = 0;
                }
              }
              // this.totalQuestions = this.newF.length;
              this.questionLeft = this.totalQuestions - this.questionsAttended;
              // console.log(this.formRec[a]);
              // this.newF.push(this.formRec[a])

            }

            if (this.newF) {
              if (this.answ) {
                if (this.newF.length === this.answ.length) {
                  alert('All The Questions Are Answered');
                } else {
                  for (var i = 0; i < this.newF.length; i++) {
                    try {
                      if (this.answ[i].Question === 'undefined') {
                        if (this.newF[i].Question !== this.answ[i].Question && !this.answ[i].Answer) {
                          this.insideForm.push(this.newF[i].Question);
                          this.formRecord.push({ Question: this.newF[i].Question });
                        }
                      }
                    } catch (e) {
                      this.insideForm.push(this.newF[i].Question);
                      this.formRecord.push({ Question: this.newF[i].Question });
                    }
                  }
                }
              } else {
                for (var newFormDetails of this.newF) {
                  this.insideForm.push(newFormDetails.Question);
                  this.formRecord.push({ Question: newFormDetails.Question });
                }
              }
            } else {
              alert('No Form Found');
            }



            //Global Options
            Chart.defaults.global.defaultFontFamily = 'Lato'
            Chart.defaults.global.defaultFontSize = 18
            Chart.defaults.global.defaultFontColor = '#777'

            //pie chart
            this.PieChart = new Chart('doughnut', {
              type: 'doughnut', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
              data: {
                labels: [
                  'Total Questions',
                  'Questions Attended',
                  'Questions Left',
                  'Rank'
                ],
                datasets: [{
                  label: 'Population',
                  data: [
                    this.totalQuestions,
                    this.questionsAttended,
                    this.questionLeft,
                    this.questionRank
                  ],
                  // backgroundColor:'green'
                  backgroundColor: [
                    'rgb(255, 99, 132, 0.6)',
                    'rgb(189, 158, 212, 0.6)',
                    // 'rgb(102, 162, 235, 0.6)',
                    'rgb(255, 206, 86, 0.6)',
                    'rgb(75, 192, 192, 0.6)'
                  ],
                  borderWidth: 1,
                  borderColor: '#777',
                  hoverBorderWidth: 3,
                  hoverBorderColor: '#000'
                }]
              },
              options: {
                title: {
                  display: true,
                  text: 'Total Question Of Form',
                  fontSize: 25,
                  // position:'centre'
                },
                legend: {
                  // display:false,
                  display: true,
                  position: 'left',
                  lebels: {
                    fontColor: '#000'
                  }
                },
                layout: {
                  padding: {
                    left: 650,
                    right: 0,
                    bottom: 0,
                    top: 0
                  }
                },
                tooltips: {
                  // enabled:false
                  enabled: true,
                  backgroundColor: 'red',
                  fontSize: 18,
                  text: 'Abcd'

                },
                responsive: true
              }
            });

















            // // console.log(this.newF);
            // // console.log(this.newF.length);
            // // console.log(this.formRec);
            // // console.log(this.formRec.length);
            // // console.log(this.studentForm);
            // // console.log(this.answ);
            // // console.log(this.answ.length);

            // this.newF = [{Question:"What is Your Name",answer:"abcd"},{Question:"Where do you live",answer:"efgh"},{Question:"this is new question",answer:"this is its answer"}]
            // this.answ = [{Question:"What is Your Name",Answer:"vik"},{Question:"Where do you live",answer:"Kormangala"}]

            // if (this.newF) {
            //   console.log('111111111')
            //   if (this.answ) {
            //     console.log('22222222')
            //     if (this.newF.length === this.answ.length) {
            //       console.log('333333333')
            //       alert('All The Questions Are Answered');
            //     } else {
            //       console.log('44444444')
            //       // for (var i = 0; i < this.newF.length; i++) {
            //       for (var newFormDetails of this.newF) {
            //         console.log('55555555')
            //         console.log(newFormDetails)
            //         // console.log(this.newF[i]);
            //         this.insideForm.push(newFormDetails.Question);
            //         this.formRecord.push({ Question: newFormDetails.Question });

            //       }
            //     }
            //   } else {
            //     console.log('17 17 17 17 17 17')
            //     for (var i = 0; i < this.newF.length; i++) {
            //       this.insideForm.push(newFormDetails.Question);
            //       this.formRecord.push({ Question: newFormDetails.Question });
            //     }
            //   }
            // } else {
            //   console.log('18 18 18 18 18 18 18')
            //   alert(' No Form Found');
            // }

            // if(this.answ){
            //   for(var j=0;j<this.answ.length;j++){
            //      if (this.answ == undefined) {
            //     console.log('55555555')
            //     this.insideForm.push(this.formation[j].Question);
            //     this.formRecord.push({ Question: this.formation[j].Question });
            //   } else {
            //     if(this.answ[j]){
            //       console.log(this.answ[j])
            //     if (this.answ[j].Answer == undefined) {
            //       console.log('111111111')
            //       this.insideForm.push(this.formation[j].Question);
            //       this.formRecord.push({ Question: this.formation[j].Question });
            //     } else {
            //       console.log('22222222')
            //       if (!this.answ[j].Answer) {
            //         console.log('3333333333')
            //         console.log(this.formation[j])
            //         this.insideForm.push(this.formation[j].Question);
            //         this.formRecord.push({ Question: this.formation[j].Question });
            //       } else {
            //         console.log('44444444444')
            //         //  this.insideForm.push(this.formation[j].Question);
            //         // this.formRecord.push({ Question: this.formation[j].Question });
            //       }
            //     }
            //   }else{
            //     console.log('66666666666')
            //     console.log(this.formation[j])
            //     this.insideForm.push(this.formation[j].Question);
            //         this.formRecord.push({ Question: this.formation[j].Question });
            //   }
            //   }
            //   }
            // }
          }










          // for (var i = 0; i < this.studentForm.length; i++) {
          //   this.formation = this.studentForm[i].forms;
          //   console.log(this.formation);
          //   for (var j = 0; j < this.formation.length; j++) {
          //     console.log(this.formation[j]);
          //     // console.log(this.answ[j].Answer);
          //     // if(!this.answ){}

          //     if (this.answ == undefined) {
          //       console.log('55555555')
          //       this.insideForm.push(this.formation[j].Question);
          //       this.formRecord.push({ Question: this.formation[j].Question });
          //     } else {
          //       if (this.answ[j]) {
          //         console.log(this.answ[j])
          //         if (this.answ[j].Answer == undefined) {
          //           console.log('111111111')
          //           this.insideForm.push(this.formation[j].Question);
          //           this.formRecord.push({ Question: this.formation[j].Question });
          //         } else {
          //           console.log('22222222')
          //           if (!this.answ[j].Answer) {
          //             console.log('3333333333')
          //             console.log(this.formation[j])
          //             this.insideForm.push(this.formation[j].Question);
          //             this.formRecord.push({ Question: this.formation[j].Question });
          //           } else {
          //             console.log('44444444444')
          //             //  this.insideForm.push(this.formation[j].Question);
          //             // this.formRecord.push({ Question: this.formation[j].Question });
          //           }
          //         }
          //       } else {
          //         console.log('66666666666')
          //         console.log(this.formation[j])
          //         this.insideForm.push(this.formation[j].Question);
          //         this.formRecord.push({ Question: this.formation[j].Question });
          //       }
          //     }


          //     // this.insideForm.push(this.formation[j].Question);
          //     // this.formRecord.push({ Question: this.formation[j].Question });
          //     // console.log(this.insideForm);
          //   }
          // }
          // console.log(this.formRecord);
          // console.log(this.formation);
          //  console.log(this.insideForm);
          //  this.ans=this.insideForm[0];
          // //  this.formRecord[i].Question = this.insideForm[i];
          //  for(var i=0;i<this.insideForm.length;i++){
          //    console.log(i)
          //    this.formRecord.push({Question: this.insideForm[i]});
          //  }
          // }
        });
      };
      // if (data.data) {
      //   if (data.data.questionRecord) {
      //     this.savedQuestions = data.data.questionRecord;
      //     if (data.data.questionRecord.queOne) {
      //       this.queOne = true;
      //     } else {
      //       this.queOne = false;
      //     }
      //     if (data.data.questionRecord.queTwo) {
      //       this.queTwo = true;
      //     } else {
      //       this.queTwo = false;
      //     }
      //     if (data.data.questionRecord.queThree) {
      //       this.queThree = true;
      //     } else {
      //       this.queThree = false;
      //     }
      //     if (data.data.questionRecord.queFour) {
      //       this.queFour = true;
      //     } else {
      //       this.queFour = false;
      //     }
      //   }
      // }
    })

    // //  this.StudentForm = new FormGroup({
    // //   question:new FormControl('john doe', [
    // //     Validators.required,
    // //     Validators.minLength(8),
    // //     Validators.maxLength(20)
    // //   ]),
    // //   answer:new FormControl(),
    // //   adress:new FormGroup({
    // //     line1:new FormControl('marathahalli'),
    // //   city:new FormControl(),
    // //   state:new FormControl(),
    // //   }),
    // // hobbies:new FormArray([])
    // //  });












  }
  //   addHobbies(){
  //   (<FormArray>this.StudentForm.get('hobbies')).push(new FormControl());
  // }

  //      formDetails(){
  //   // console.log(this.studentForm)
  //   // console.log(this.que)
  //   console.log(this.StudentForm.get('hobbies').value)
  // }



}
