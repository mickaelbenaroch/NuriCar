import { Injectable } from '@angular/core';
import { VehiculeEntity } from '../models/VehiculeModel';

@Injectable({
  providedIn: 'root'
})
export class IconServiceService {

  vehicleSearched: VehiculeEntity = new VehiculeEntity();
  imagesPathArray: string[] = [];

  constructor() { }

  searchCar(entity: VehiculeEntity): void{
    if (!entity) {
      return;
    }
    this.vehicleSearched = entity;
    //TODO: SAME FOR ALL MANUFACTURERS
    if (this.vehicleSearched.manufacturer === "מאזדה") {
      this.vehicleSearched.manufacturer = "mazda";
    }
    let prefix = '/assets/' + this.vehicleSearched.manufacturer + '/' + this.vehicleSearched.vehicleType + '/';
    if (this.vehicleSearched.isSingleYear) {
      prefix = prefix + this.vehicleSearched.vehicleYear + '/';
      prefix = prefix.replace('+', 'post');
    } else {
      prefix = prefix + this.vehicleSearched.vehicleYear + '/';
    }
    for (let i = 1; i < this.vehicleSearched.iconsNumber + 1; i++) {
      this.imagesPathArray.push(prefix + 'image' + i + '.png');
    }
  }
}
