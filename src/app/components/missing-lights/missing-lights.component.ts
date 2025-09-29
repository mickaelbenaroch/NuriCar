import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from '../../services/http.service';
import { MissingIcon } from '../../models/misssing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({standalone: true, selector: 'app-missing-lights',
  imports: [CommonModule, FormsModule],
  templateUrl: './missing-lights.component.html',
  styleUrls: ['./missing-lights.component.scss']})
export class MissingLightsComponent implements OnInit {
  private model: MissingIcon = new MissingIcon();
  public base64textString: string;
  public text: string;
  constructor(private httpService: HttpService, 
              private dialog: MatDialogRef<MissingLightsComponent>,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit(): void {
  }

  handleFileSelect(event):void{
    //Reads the file bit by bit and save it into this.mp3 in base64 format 
    if (event.target.files && event.target.files[0]) {
     const reader = new FileReader();
     reader.onload = (event1: any) => {
       this.base64textString = event1.target.result;
       this.model.picture = this.base64textString
     };
     reader.readAsDataURL(event.target.files[0]);
  }
 }

 cancel() {
   this.dialog.close();
 }
 validate() {
    this.ngxService.start();
    this.model.text = this.text;
    this.model.date = new Date();
    this.model.isNew = true;
    this.sendMissingRequest();
 }
sendMissingRequest() {
  this.httpService.post('icons/missing', this.model).subscribe(
    res =>{
      if (res && res.data === true) {
      this.ngxService.stop();
      this.dialog.close('true');
    } else {
      this.ngxService.stop();
      this.dialog.close('true');
    }
  }, _error => {
      this.ngxService.stop();
      this.dialog.close('true');
  });
}
}
