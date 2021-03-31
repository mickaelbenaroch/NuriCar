import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconServiceService} from 'src/app/services/icon-service.service'

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss']
})
export class IconsPageComponent implements OnInit, DoCheck {

  constructor(public iconService: IconServiceService,
              public router: Router) { }
  ngDoCheck(): void {
    setTimeout(() => {
      let htmlHeight = document.getElementsByTagName('html')[0].offsetHeight;
      let envelopMainPageHeightFirst = (document.getElementsByClassName('envelopIconPage')[0] as HTMLElement);
      let envelopMainPageHeight;
      if  (envelopMainPageHeightFirst) {
        envelopMainPageHeight = envelopMainPageHeightFirst.offsetHeight;
        if (htmlHeight < (envelopMainPageHeight + 100)) {
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

}
