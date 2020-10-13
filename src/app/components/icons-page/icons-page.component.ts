import { Component, OnInit } from '@angular/core';
import { IconServiceService} from 'src/app/services/icon-service.service'

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss']
})
export class IconsPageComponent implements OnInit {


  constructor(public iconService: IconServiceService) { }

  ngOnInit(): void {
  }

}
