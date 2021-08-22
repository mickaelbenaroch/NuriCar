import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(public carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars();
  }

}
