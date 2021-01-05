import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconServiceService} from 'src/app/services/icon-service.service'

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss']
})
export class IconsPageComponent implements OnInit {

  constructor(public iconService: IconServiceService,
              public router: Router) { }

  ngOnInit(): void {
    if(this.iconService && (!this.iconService.imagesPathArray || this.iconService.imagesPathArray.length === 0)) {
      this.router.navigateByUrl('/');
    }
  }

}
