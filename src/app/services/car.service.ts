import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Car } from '../models/car';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public cars: Car[] = [];
  constructor(private httpService: HttpService, private ngxService: NgxUiLoaderService) { }

  getCars() {
    this.getCarsApiCall();
  }
  getCarsApiCall() {
    this.httpService.get('cars/cars').subscribe((res: any) => {
      if (res && res.data) {
        this.cars = res.data;
        this.ngxService.stop();
      } else {
        this.getCarsApiCall();
      }
    });
  }
}
