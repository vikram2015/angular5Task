import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  studentRecord = [];

  constructor(private _adminService: AdminServiceService) { }

  ngOnInit() {

    this._adminService.getStudent().subscribe((data) => {
      if (data.success) {
        for(var i=0; i<data.data.length; i++){
          if(data.data[i].rank > 0){
          this.studentRecord.push(data.data[i]);
          }
        }
      }
    });
  }

}
