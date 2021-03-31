import {VehiculeEntity} from '../models/vehiculeModel';
import {Cars} from '../models/cars';
import {Injectable} from '@angular/core';
import {Icon} from '../models/icon';
import {Car} from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class IconServiceService {

  vehicleSearched: VehiculeEntity = new VehiculeEntity();
  imagesPathArray: string[] = [];
  iconDescriptionJson: Icon[] = [];
  public manufacturerChoosen: boolean = false;
  public modelChoosen: boolean = false;
  public yearChoosen: boolean = false;
  selectedManufacturer: string;
  selectedModel: any;
  selectedYear: string;
  buttonClicked: boolean = false;
  public carsJson = new Cars();
  public selectedModelJson = new Array<Car>();
  public vehicle = new VehiculeEntity();
  public focusedIcon; 

  constructor() { }

  searchCar(entity: VehiculeEntity): void{
    if (!entity) {
      return;
    }
    this.imagesPathArray = [];
    this.vehicleSearched = entity;
      let prefix = '/assets/' + this.vehicleSearched.manufacturer + '/' + this.vehicleSearched.vehicleType + '/';
      if (this.vehicleSearched.isHybrid) {
        prefix += 'hybrid/';
      }
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
