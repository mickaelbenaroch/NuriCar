import {VehiculeEntity} from '../../app/models/VehiculeModel';
import {Injectable, OnInit} from '@angular/core';
import {Icon} from '../models/icon';
import {Car} from '../models/car';
import { HttpService } from './http.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class IconServiceService implements OnInit{

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
  private _selectedModelJson = new Array<Car>();
  public get selectedModelJson() {
    return this._selectedModelJson;
  }
  public set selectedModelJson(value) {
    this._selectedModelJson = value;
  }
  public vehicle = new VehiculeEntity();
  public focusedIcon; 
  public icons: Icon[] = [];

  constructor(private httpService: HttpService, private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.getIcons();
  }
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
          if (this.vehicleSearched.vehicleYear.includes('-') && this.vehicleSearched.vehicleYear.endsWith('h/')) {
            prefix = prefix + this.vehicleSearched.vehicleYear + '/';
            prefix = prefix.slice(0, -1) + 'h/'
          }
        if (this.vehicleSearched.isHybrid && prefix.endsWith('posth/') && 
            this.vehicleSearched.vehicleType !== 'highlander' && 
            this.vehicleSearched.vehicleType !== 'rav4' &&
            this.vehicleSearched.vehicleType !== 'ionic' &&
            this.vehicleSearched.vehicleType !== 'kone' &&
            this.vehicleSearched.vehicleType !== 'optima' &&
            this.vehicleSearched.vehicleType !== 'ceed') {
          prefix = prefix.slice(0, -2) + '/';
        }
      }
      for (let i = 1; i < Number(this.vehicleSearched.iconsNumber) + 1; i++) {
        this.imagesPathArray.push(prefix + 'image' + i + '.png');
      }
  }
  getIcons() {
    this.ngxService.start();
    this.getIconsApiCall();
  }
  getIconsApiCall() {
    this.httpService.get('icons/icons').subscribe((res: any) => {
      if (res && res.data) {
        this.icons = res.data;
        this.ngxService.stop();
      } else {
        this.getIconsApiCall();
      }
    });
  }
}
