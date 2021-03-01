import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconServiceService} from 'src/app/services/icon-service.service'

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss']
})
export class IconsPageComponent implements OnInit, AfterViewInit {

  constructor(public iconService: IconServiceService,
              public router: Router) { }
  ngAfterViewInit(): void {
    let htmlHeight = document.getElementsByTagName('html')[0].offsetHeight;
    let envelopMainPageHeight = (document.getElementsByClassName('envelopIconPage')[0] as HTMLElement).offsetHeight;
    if (htmlHeight < envelopMainPageHeight) {
      document.getElementsByTagName('html')[0].style.height = "unset";
    }
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

}
