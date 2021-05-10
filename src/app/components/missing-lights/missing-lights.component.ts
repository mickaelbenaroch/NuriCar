import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-missing-lights',
  templateUrl: './missing-lights.component.html',
  styleUrls: ['./missing-lights.component.scss']
})
export class MissingLightsComponent implements OnInit {
  private model: any;
  public base64textString: string;
  public text: string;
  constructor(private httpService: HttpService, private dialog: MatDialogRef<MissingLightsComponent>) { }

  ngOnInit(): void {
  }

  handleFileSelect(event):void{
    //Reads the file bit by bit and save it into this.mp3 in base64 format 
    if (event.target.files && event.target.files[0]) {
     const reader = new FileReader();
     reader.onload = (event1: any) => {
       this.base64textString = event1.target.result;
       this.model = {
         picture: this.base64textString
       };
     };
     reader.readAsDataURL(event.target.files[0]);
  }
 }

 cancel() {
   this.dialog.close();
 }
 validate() {
  let obj;
   if (this.model) {
    obj = {
      picture: this.model.picture,
      text: this.text
    };
   } else {
     obj = {
       picture: null,
       text: this.text
     };
   }
  console.log(obj.text);
  this.httpService.post('icons/missing', obj).subscribe(
    res =>{
      this.dialog.close('true');
    },
    err =>{
      console.log(err);
      this.dialog.close('error');
    }
  )
 }

}
