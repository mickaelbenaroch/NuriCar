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
  this.ngxService.start();

  this.httpService.get('cars/cars').subscribe({
    next: (res: any) => {
      if (res && res.data) {
        this.cars = res.data;
        this.ngxService.stop();
      } else {
        console.warn('No data in response, retrying...');
        this.getCarsApiCall(); // ⚠️ Be careful: could cause infinite recursion
      }
    },
    error: (err) => {
      console.error('Error fetching cars:', err);
      this.ngxService.stop();
      // Optionally show an error message to the user
      // this.toastr.error('Failed to load cars');
    }
  });
}

}
