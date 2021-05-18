import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IconServiceService} from 'src/app/services/icon-service.service'
import { MissingLightsComponent } from '../missing-lights/missing-lights.component';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss']
})
export class IconsPageComponent implements OnInit, DoCheck {

  constructor(public iconService: IconServiceService,
              public router: Router,
              public dialog: MatDialog) { }

  ngDoCheck(): void {
    setTimeout(() => {
      let htmlHeight = document.getElementsByTagName('html')[0].offsetHeight;
      let envelopMainPageHeightFirst = (document.getElementsByClassName('envelopIconPage')[0] as HTMLElement);
      let envelopMainPageHeight;
      if  (envelopMainPageHeightFirst) {
        envelopMainPageHeight = envelopMainPageHeightFirst.offsetHeight;
        if (htmlHeight < (envelopMainPageHeight + 130)) {
          document.getElementsByTagName('html')[0].style.height = "unset";
          document.getElementsByTagName('body')[0].style.height = "unset";
        }
      };
    }, 1000);
  }

  ngOnInit(): void {
    if(this.iconService && (!this.iconService.imagesPathArray || this.iconService.imagesPathArray.length === 0)) {
      this.router.navigateByUrl('/');
    }
  }

  Back() {
    this.router.navigateByUrl('main');
  }

  IconClicked(path: string) {
    console.log(path);
    this.iconService.focusedIcon = path;
    this.router.navigateByUrl('focus');
  }

  missingLight() {
    let dialogRef = this.dialog.open(MissingLightsComponent, {
      height: '500px',
      width: '500px',
      panelClass: 'missing-box'
    }).afterClosed().subscribe(res => {
      if (res === 'true') {
        this.dialog.open(NotificationsComponent,{
          height: '60px',
          data: {
            message: 'תודה על השיתוף...',
          },
          panelClass: 'not-g'
        });
      } else {
        this.dialog.open(NotificationsComponent,{
          height: '60px',
          data: {
            message: 'משהו השתבש... נסה מאוחר יותר',
          },
          panelClass: 'not-r'
        });
      }
    });
  }

}
