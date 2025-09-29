import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Icon } from 'src/app/models/icon';
import { IconServiceService } from 'src/app/services/icon-service.service';
import { BreadcumsComponent } from 'src/app/components/breadcums/breadcums.component';
import { IconColorPipe } from 'src/app/pipes/icon-color.pipe';

@Component({standalone: true, selector: 'app-focused-icon',
  templateUrl: './focused-icon.component.html',
  imports: [CommonModule, FormsModule, BreadcumsComponent, IconColorPipe],
  styleUrls: ['./focused-icon.component.scss']})
export class FocusedIconComponent implements OnInit, AfterViewInit {

  public icon: Icon;
  severity: string;
  firstColor: string;
  constructor(private router: Router, public iconService: IconServiceService) { }

  ngOnInit(): void {
    if(this.iconService && (!this.iconService.imagesPathArray || this.iconService.imagesPathArray.length === 0)) {
      this.router.navigateByUrl('/');
    }
    for (let i = 0; i < this.iconService.icons.length; i++) {
      for (let j = 0; j < this.iconService.icons[i].paths.length; j++)
        if (this.iconService.icons[i].paths[j] === this.iconService.focusedIcon) {
          this.icon = this.iconService.icons[i];
          const isMultiColors = this.icon?.severity.includes(',');
          if (isMultiColors) {
            this.severity = this.icon.severity;
             this.firstColor = this.icon?.severity.split(',')[0].trim();
          } else {
           this.severity = this.icon?.severity;
          }
          return;
        }
    }
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
