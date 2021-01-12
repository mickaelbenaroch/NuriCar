import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Cars } from 'src/app/models/Cars';
import { VehiculeEntity } from 'src/app/models/VehiculeModel';
import { IconServiceService } from 'src/app/services/icon-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    images = [
      '/assets/symbols/audi.png', 
      '/assets/symbols/opel.png',
      '/assets/symbols/alpha.jpg',
      '/assets/symbols/bmw.jpg',
      '/assets/symbols/jeep.jpg', 
      '/assets/symbols/dacia.jpg',
      '/assets/symbols/daewoo.jpg', 
      '/assets/symbols/dayatsu.png',
      '/assets/symbols/honda.png', 
      '/assets/symbols/volvo.jpg',
      '/assets/symbols/toyota.jpg', 
      '/assets/symbols/hunday.jpg',
      '/assets/symbols/mazda.png', 
      '/assets/symbols/mini.jpg', 
      '/assets/symbols/mitsubishi.png',
      '/assets/symbols/mercedes.jpg',
      '/assets/symbols/nissan.jpg', 
      '/assets/symbols/subaru.jpg', 
      '/assets/symbols/suziki.jpg',
      '/assets/symbols/seat.jpg',
      '/assets/symbols/citroen.png',
      '/assets/symbols/smart.png',
      '/assets/symbols/skoda.png', 
      '/assets/symbols/wolswagen.jpg',
      '/assets/symbols/ford.jpg',
      '/assets/symbols/fiat.jpg', 
      '/assets/symbols/peugeot.jpg', 
      '/assets/symbols/kia.jpg',
      '/assets/symbols/crysler.png', 
      '/assets/symbols/rover.jpg',
      '/assets/symbols/renault.jpg',
      '/assets/symbols/chevrolet.jpg', 
    ];
    carsnames = [
      "אאודי",
      "אופל",
      "אלפא רומיאו",
      "ב.מ.וו",
      "ג'יפ / Jeep",
      "דאצ'יה",
      "דייהו",
      "דייהטסו",
      "הונדה",
      "וולוו",
      "טויוטה",
      "יונדאי",
      "מאזדה",
      "מיני",
      "מיצובישי",
      "מרצדס",
      "ניסאן",
      "סובארו",
      "סוזוקי",
      "סיאט",
      "סיטרואן",
      "סמארט",
      "סקודה",
      "פולקסווגן",
      "פורד",
      "פיאט",
      "פיג'ו",
      "קיה",
      "קרייזלר",
      "רובר",
      "רנו",
      "שברולט",
  ];
  public manufacturerChoosen: boolean = false;
  public modelChoosen: boolean = false;
  public yearChoosen: boolean = false;
  title = 'WarningLightsApp';
  selectedManufacturer: string;
  selectedModel: any;
  selectedYear: string;
  buttonClicked: boolean = false;
  public carsJson = new Cars();
  public selectedModelJson = new Array<Car>();
  public vehicle = new VehiculeEntity();

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

  ManufacturerChange(event: any) {
    if (event) {
      this.selectedManufacturer = event.value;
      this.initModels();
      this.manufacturerChoosen = true;
    }
  }

  ModelChange(event: any) {
    if (event) {
        this.selectedModel = event.value;
      if (this.selectedModel && this.selectedModel.years) {
        let newYears = [];
        this.selectedModel.years.forEach(year => {
        if (year !== 'hybrid') {
          newYears.push(year);
        }
    });
      this.selectedModel.years = newYears;
    }
      this.modelChoosen = true;
    }
  }

  Back() {
    this.router.navigateByUrl('');
  }


  initModels() {
    if (!this.selectedManufacturer) {
    return;
    }
    switch (this.selectedManufacturer) {
    case "אאודי":
    this.selectedModelJson = this.carsJson.audi;
    this.vehicle.manufacturer = 'audi';
    break;
    case "אופל":
    this.selectedModelJson = this.carsJson.opel;
    this.vehicle.manufacturer = 'opel';
    break;
    case "אלפא רומיאו":
    this.selectedModelJson = this.carsJson.alpha;
    this.vehicle.manufacturer = 'alpha';
    break;
    case "ב.מ.וו":
    this.selectedModelJson = this.carsJson.bmw;
    this.vehicle.manufacturer = 'bmw';
    break;
    case "ג'יפ / Jeep":
    this.selectedModelJson = this.carsJson.jeep;
    this.vehicle.manufacturer = 'jeep';
    break;
    case "דאצ'יה":
    this.selectedModelJson = this.carsJson.dacia;
    this.vehicle.manufacturer = 'dacia';
    break;      
    case "דייהו":
    this.selectedModelJson = this.carsJson.daewoo;
    this.vehicle.manufacturer = 'daewoo';
    break;
    case "דייהטסו":
    this.selectedModelJson = this.carsJson.dayatsu;
    this.vehicle.manufacturer = 'dayatsu';
    break;
    case "הונדה":
    this.selectedModelJson = this.carsJson.honda;
    this.vehicle.manufacturer = 'honda';
    break;
    case "וולוו":
    this.selectedModelJson = this.carsJson.volvo;
    this.vehicle.manufacturer = 'volvo';
    break;
    case "טויוטה":
    this.selectedModelJson = this.carsJson.toyota;
    this.vehicle.manufacturer = 'toyota';
    break;
    case "יונדאי":
    this.selectedModelJson = this.carsJson.hunday;
    this.vehicle.manufacturer = 'hunday';
    break; 
    case"מאזדה":
    this.selectedModelJson = this.carsJson.mazda;
    this.vehicle.manufacturer = 'mazda';
    break;
    case"מיני":
    this.selectedModelJson = this.carsJson.mini;
    this.vehicle.manufacturer = 'mini';
    break;
    case "מיצובישי":
    this.selectedModelJson = this.carsJson.mistubishi;
    this.vehicle.manufacturer = 'mitsubishi';
    break;
    case "מרצדס":
    this.selectedModelJson = this.carsJson.mercedes;
    this.vehicle.manufacturer = 'mercedes';
    break;
    case "ניסאן":
    this.selectedModelJson = this.carsJson.nissan;
    this.vehicle.manufacturer = 'nissan';
    break;
    case "סובארו":
    this.selectedModelJson = this.carsJson.subaru;
    this.vehicle.manufacturer = 'subaru';
    break;
    case "סוזוקי":
    this.selectedModelJson = this.carsJson.suzuki;
    this.vehicle.manufacturer = 'suzuki';
    break;
    case "סיאט":
    this.selectedModelJson = this.carsJson.seat;
    this.vehicle.manufacturer = 'seat';
    break;
    case "סיטרואן":
    this.selectedModelJson = this.carsJson.citroen;
    this.vehicle.manufacturer = 'citroen';
    break;
    case "סמארט":
    this.selectedModelJson = this.carsJson.smart;
    this.vehicle.manufacturer = 'smart';
    break;
    case "סקודה":
    this.selectedModelJson = this.carsJson.skoda;
    this.vehicle.manufacturer = 'skoda';
    break;
    case "פולקסווגן":
    this.selectedModelJson = this.carsJson.wolswagen;
    this.vehicle.manufacturer = 'wolswagen';
    break;
    case "פורד":
    this.selectedModelJson = this.carsJson.ford;
    this.vehicle.manufacturer = 'ford';
    break;
    case "פיאט":
    this.selectedModelJson = this.carsJson.fiat;
    this.vehicle.manufacturer = 'fiat';
    break;
    case "פיג'ו":
    this.selectedModelJson = this.carsJson.peugeot;
    this.vehicle.manufacturer = 'peugeot';
    break;
    case "קיה":
    this.selectedModelJson = this.carsJson.kia;
    this.vehicle.manufacturer = 'kia';
    break;
    case "קרייזלר":
    this.selectedModelJson = this.carsJson.crysler;
    this.vehicle.manufacturer = 'crysler';
    break;
    case "רובר":
    this.selectedModelJson = this.carsJson.rover;
    this.vehicle.manufacturer = 'rover';
    break;
    case "רנו":
    this.selectedModelJson = this.carsJson.renault;
    this.vehicle.manufacturer = 'renault';
    break;
    case "שברולט":
    this.selectedModelJson = this.carsJson.chevrolet;
    this.vehicle.manufacturer = 'chevrolet';
    break;
    }
  }

  YearChange(event: any) {
    if (event && event.value) {
      this.buttonClicked = true;
    }
  }

  SearchCar() {
    let index = this.selectedModel.years.indexOf(this.selectedYear);
    this.vehicle.iconsNumber = this.selectedModel.icons[index];
    if (this.selectedYear.includes('+')) {
    this.vehicle.isSingleYear = true;
    }
    if (this.selectedModel.isHybrid) {
    this.vehicle.isHybrid = true;
    }
    this.vehicle.vehicleYear = this.selectedYear;
    this.vehicle.vehicleType = this.selectedModel.englishModelName;
    this.iconService.searchCar(this.vehicle);
    this.router.navigateByUrl('icons');
  }

}
