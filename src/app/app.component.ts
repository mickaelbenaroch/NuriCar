import { Component, HostListener, OnInit } from '@angular/core';
import { VehiculeEntity} from 'src/app/models/VehiculeModel'
import { Car} from 'src/app/interfaces/car'
import { Mazda} from 'src/app/interfaces/mazda'
import { MazdaYears} from 'src/app/models/vehiculesYears/mazdaYears'
import { VehiculeTypes} from 'src/app/models/vehiculesTypes'
import { Router } from '@angular/router';
import { IconServiceService } from './services/icon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public modelChoosen: boolean = false;
  public manufacturerChoosen: boolean = false;
  public yearChoosen: boolean = false;
  title = 'WarningLightsApp';
  selectedValue: string;
  selectedCar: string;
  selectedModel: string;
  selectedYears: string;
  selectedCarIconsNumber: number;
  mazda: MazdaYears = new MazdaYears();
  carCriteria: VehiculeEntity;
  cars: VehiculeTypes = new VehiculeTypes();
  yearsToDisplay: string[] = [];
  buttonClicked: boolean = false;
  yearIndex: number;

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.ngOnInit();
  }
  
  constructor(private router: Router, private iconService: IconServiceService) {}

  ngOnInit() {
    let currentUrl = location.pathname;
    if (currentUrl === '/' && this.buttonClicked) {
      this.buttonClicked = false;
    }
    if (currentUrl === '/icons' && !this.buttonClicked) {
      this.router.navigateByUrl('');
    }
  }

  manufacturerChosen(manufacturer: any) {
    this.selectedCar = manufacturer.target.value;
    this.manufacturerChoosen = true;
    this.selectedModel = this.mazda.mazda[0].modelName;
    this.modelChoosenFakeCall(this.selectedModel);
  }

  modelChosen(model?: any) : any {
    this.yearsToDisplay = [];
    this.selectedModel = model.target.value;
    this.modelChoosen = true;
    let temp;
    switch (this.selectedModel) {
      case "3":
        temp = this.mazda.mazda.find(c => c.modelName === model.target.value);
        break;
  //TODO: handle other cases not only Mazda
      default:
        temp = this.mazda.mazda.find(c => c.modelName === model.target.value);
        break;
    }
    if (temp ) {
      temp.years.forEach(year => {
        this.yearsToDisplay.push(year);
      })
    }
    this.selectedYears = this.yearsToDisplay[0];
    let temp2 = this.mazda.mazda.find(c => c.modelName === this.selectedModel);
    this.yearIndex = temp.years.indexOf(this.selectedYears);
    this.selectedCarIconsNumber = temp2.icons[this.yearIndex];
    this.yearChoosen = true;
  }

  yearsChoosen(event: any) {
    this.selectedYears = event.target.value;
    let temp = this.mazda.mazda.find(c => c.modelName === this.selectedModel);
    this.yearIndex = temp.years.indexOf(this.selectedYears);
    this.selectedCarIconsNumber = temp.icons[this.yearIndex];
  }

  searchCar() {
    if (!this.selectedCar || !this.selectedModel || !this.selectedYears || !this.selectedCarIconsNumber) {
      return;
    }
    this.carCriteria = new VehiculeEntity();
    this.carCriteria.manufacturer = this.selectedCar;
    this.carCriteria.vehicleType = this.selectedModel;
    if (this.selectedYears.includes('-') && !this.selectedYears.includes('+')) {
        this.carCriteria.isSingleYear = false;
    } else {
      this.carCriteria.isSingleYear = true;
    }
    this.carCriteria.vehicleYear = this.selectedYears;
    this.carCriteria.iconsNumber = this.selectedCarIconsNumber;
    this.buttonClicked = true;
    this.iconService.searchCar(this.carCriteria);
    this.router.navigateByUrl('icons');
  }

  modelChoosenFakeCall(param: any) {
    this.yearsToDisplay = [];
    this.selectedModel = param;
    this.modelChoosen = true;
    let temp;
    switch (this.selectedModel) {
      case "3":
        temp = this.mazda.mazda.find(c => c.modelName === param);
        break;
  //TODO: handle other cases not only Mazda
      default:
        temp = this.mazda.mazda.find(c => c.modelName === param);
        break;
    }
    if (temp ) {
      temp.years.forEach(year => {
        this.yearsToDisplay.push(year);
      })
    }
    this.selectedYears = this.yearsToDisplay[0];
    let temp2 = this.mazda.mazda.find(c => c.modelName === this.selectedModel);
    this.yearIndex = temp.years.indexOf(this.selectedYears);
    this.selectedCarIconsNumber = temp2.icons[this.yearIndex];
    this.yearChoosen = true;
  }
}
