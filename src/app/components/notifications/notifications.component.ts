import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input() message: string;
  constructor(private dialogRef: MatDialogRef<NotificationsComponent>, @Inject(MAT_DIALOG_DATA) public data) { 
    this.message = data.message;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

}
