import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from 'src/app/models/icon';
import { IconServiceService } from 'src/app/services/icon-service.service';

@Component({
  selector: 'app-focused-icon',
  templateUrl: './focused-icon.component.html',
  styleUrls: ['./focused-icon.component.scss']
})
export class FocusedIconComponent implements OnInit, AfterViewInit {

  public icon: Icon;
  constructor(private router: Router, public iconService: IconServiceService) { }

  ngOnInit(): void {
    this.iconService.iconDescriptionJson.forEach(icon => {
      if (icon && icon.more) {
        icon.more.forEach(element => {
          if (element === this.iconService.focusedIcon) {
            this.icon = icon;
            return;
          }
        });
      }
    });
  }

  ngAfterViewInit(): void {
    let htmlHeight = document.getElementsByTagName('html')[0].offsetHeight;
    let envelopMainPageHeight = (document.getElementsByClassName('envelopIconFocusPage')[0] as HTMLElement).offsetHeight;
    if (htmlHeight < envelopMainPageHeight) {
      document.getElementsByTagName('html')[0].style.height = "unset";
    }
  }

  Back() {
    this.router.navigateByUrl('icons');
  }
}
