import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';
import { IconServiceService } from './services/icon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(public carService: CarService, private iconService: IconServiceService) {}

  ngOnInit(): void {
    this.carService.getCars();
    this.iconService.getIconsApiCall();
  }

}
