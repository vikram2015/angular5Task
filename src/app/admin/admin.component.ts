import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  studentRecord = [];
  studentFormOneToFive = [];
  studentFormSixToTen = [];
  studentFormElevenToTwelve = [];
  formData;
  classRange: String;
  Doughnut: any;
  totalStudents: Number;
  totalForm: Number;

  constructor(private _adminService: AdminServiceService, private _router: Router) { }


  createForm() {
    this._router.navigateByUrl('createForm');
  }


  rangeSelected() {
    // this.classRange = '1to5'
    this.studentRecord = [];
    if (this.classRange == undefined) {
      alert('Select the correct range of class')
    } else {
      this._adminService.getStudent(this.classRange).subscribe((data) => {
        if (data.success) {
          for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].rank > 0) {
              this.studentRecord.push(data.data[i]);
            }
          }
        }
        this._adminService.getTotalStudent(this.classRange).subscribe((data) => {
          if (data.success) {
            if (data.data.length > 0) {
              this.totalStudents = data.data.length;
            } else {
              this.totalStudents = 0;
            }

          }

          this._adminService.getTotalForm(this.classRange).subscribe((data) => {
            if (data.success) {
              if (data.data.length > 0) {
                this.totalForm = data.data.length;
              } else {
                this.totalForm = 0;
              }

            }


            //Global Options
            Chart.defaults.global.defaultFontFamily = 'Lato'
            Chart.defaults.global.defaultFontSize = 18
            Chart.defaults.global.defaultFontColor = '#777'


            //doughnut chart
            this.Doughnut = new Chart('doughnut', {
              type: 'doughnut', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
              data: {
                labels: [
                  'Total Students',
                  'Total Forms',
                ],
                datasets: [{
                  label: 'Population',
                  data: [
                    this.totalStudents,
                    this.totalForm
                  ],
                  // backgroundColor:'green'
                  backgroundColor: [
                    'rgb(255, 99, 132, 0.6)',
                    'rgb(189, 158, 212, 0.6)',
                    // 'rgb(102, 162, 235, 0.6)',
                    // 'rgb(255, 206, 86, 0.6)',
                    // 'rgb(75, 192, 192, 0.6)'
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
                  text: 'Total Form And Student',
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

                },
                responsive: true
              }
            });

          });
        });

      });
    }

  }

  ngOnInit() {

    this.classRange = '1to5'
    this._adminService.getStudent(this.classRange).subscribe((data) => {
      if (data.success) {
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].rank > 0) {
            this.studentRecord.push(data.data[i]);
          }
        }
      }

      this._adminService.getTotalStudent(this.classRange).subscribe((data) => {
        if (data.success) {
          this.totalStudents = data.data.length;
        }

        this._adminService.getTotalForm(this.classRange).subscribe((data) => {
          if (data.success) {
            this.totalForm = data.data.length;
          }


          //Global Options
          Chart.defaults.global.defaultFontFamily = 'Lato'
          Chart.defaults.global.defaultFontSize = 18
          Chart.defaults.global.defaultFontColor = '#777'

          //doughnut chart
          this.Doughnut = new Chart('doughnut', {
            type: 'doughnut', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
            data: {
              labels: [
                'Total Students',
                'Total Forms',
              ],
              datasets: [{
                data: [
                  this.totalStudents,
                  this.totalForm
                ],
                // backgroundColor:'green'
                backgroundColor: [
                  'rgb(255, 99, 132, 0.6)',
                  'rgb(189, 158, 212, 0.6)',
                  // 'rgb(102, 162, 235, 0.6)',
                  // 'rgb(255, 206, 86, 0.6)',
                  // 'rgb(75, 192, 192, 0.6)'
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
                text: 'Total Form And Student',
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

        });
      });
    });

  }

}
