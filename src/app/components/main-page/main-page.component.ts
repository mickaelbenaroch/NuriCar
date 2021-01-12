import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  title = 'WarningLightsApp';

  @HostListener('window:popstate', ['$event'])
    onPopState(event) {
    this.ngOnInit();
  }

constructor(private router: Router, public iconService: IconServiceService) {}

  ngOnInit() {
    let currentUrl = location.pathname;
    if (currentUrl === '/' && this.iconService.buttonClicked) {
    this.iconService.buttonClicked = false;
    }
    if (currentUrl === '/icons' && !this.iconService.buttonClicked) {
    this.router.navigateByUrl('');
    }
  }

  ManufacturerChange(event: any) {
    if (event) {
      this.iconService.selectedManufacturer = event.value;
      this.initModels();
      this.iconService.manufacturerChoosen = true;
    }
  }

  ModelChange(event: any) {
    if (event) {
        this.iconService.selectedModel = event.value;
      if (this.iconService.selectedModel && this.iconService.selectedModel.years) {
        let newYears = [];
        this.iconService.selectedModel.years.forEach(year => {
        if (year !== 'hybrid') {
          newYears.push(year);
        }
    });
      this.iconService.selectedModel.years = newYears;
    }
      this.iconService.modelChoosen = true;
    }
  }

  Back() {
    this.router.navigateByUrl('');
  }


  initModels() {
    if (!this.iconService.selectedManufacturer) {
    return;
    }
    switch (this.iconService.selectedManufacturer) {
    case "אאודי":
    this.iconService.selectedModelJson = this.iconService.carsJson.audi;
    this.iconService.vehicle.manufacturer = 'audi';
    break;
    case "אופל":
    this.iconService.selectedModelJson = this.iconService.carsJson.opel;
    this.iconService.vehicle.manufacturer = 'opel';
    break;
    case "אלפא רומיאו":
    this.iconService.selectedModelJson = this.iconService.carsJson.alpha;
    this.iconService.vehicle.manufacturer = 'alpha';
    break;
    case "ב.מ.וו":
    this.iconService.selectedModelJson = this.iconService.carsJson.bmw;
    this.iconService.vehicle.manufacturer = 'bmw';
    break;
    case "ג'יפ / Jeep":
    this.iconService.selectedModelJson = this.iconService.carsJson.jeep;
    this.iconService.vehicle.manufacturer = 'jeep';
    break;
    case "דאצ'יה":
    this.iconService.selectedModelJson = this.iconService.carsJson.dacia;
    this.iconService.vehicle.manufacturer = 'dacia';
    break;      
    case "דייהו":
    this.iconService.selectedModelJson = this.iconService.carsJson.daewoo;
    this.iconService.vehicle.manufacturer = 'daewoo';
    break;
    case "דייהטסו":
    this.iconService.selectedModelJson = this.iconService.carsJson.dayatsu;
    this.iconService.vehicle.manufacturer = 'dayatsu';
    break;
    case "הונדה":
    this.iconService.selectedModelJson = this.iconService.carsJson.honda;
    this.iconService.vehicle.manufacturer = 'honda';
    break;
    case "וולוו":
    this.iconService.selectedModelJson = this.iconService.carsJson.volvo;
    this.iconService.vehicle.manufacturer = 'volvo';
    break;
    case "טויוטה":
    this.iconService.selectedModelJson = this.iconService.carsJson.toyota;
    this.iconService.vehicle.manufacturer = 'toyota';
    break;
    case "יונדאי":
    this.iconService.selectedModelJson = this.iconService.carsJson.hunday;
    this.iconService.vehicle.manufacturer = 'hunday';
    break; 
    case"מאזדה":
    this.iconService.selectedModelJson = this.iconService.carsJson.mazda;
    this.iconService.vehicle.manufacturer = 'mazda';
    break;
    case"מיני":
    this.iconService.selectedModelJson = this.iconService.carsJson.mini;
    this.iconService.vehicle.manufacturer = 'mini';
    break;
    case "מיצובישי":
    this.iconService.selectedModelJson = this.iconService.carsJson.mistubishi;
    this.iconService.vehicle.manufacturer = 'mitsubishi';
    break;
    case "מרצדס":
    this.iconService.selectedModelJson = this.iconService.carsJson.mercedes;
    this.iconService.vehicle.manufacturer = 'mercedes';
    break;
    case "ניסאן":
    this.iconService.selectedModelJson = this.iconService.carsJson.nissan;
    this.iconService.vehicle.manufacturer = 'nissan';
    break;
    case "סובארו":
    this.iconService.selectedModelJson = this.iconService.carsJson.subaru;
    this.iconService.vehicle.manufacturer = 'subaru';
    break;
    case "סוזוקי":
    this.iconService.selectedModelJson = this.iconService.carsJson.suzuki;
    this.iconService.vehicle.manufacturer = 'suzuki';
    break;
    case "סיאט":
    this.iconService.selectedModelJson = this.iconService.carsJson.seat;
    this.iconService.vehicle.manufacturer = 'seat';
    break;
    case "סיטרואן":
    this.iconService.selectedModelJson = this.iconService.carsJson.citroen;
    this.iconService.vehicle.manufacturer = 'citroen';
    break;
    case "סמארט":
    this.iconService.selectedModelJson = this.iconService.carsJson.smart;
    this.iconService.vehicle.manufacturer = 'smart';
    break;
    case "סקודה":
    this.iconService.selectedModelJson = this.iconService.carsJson.skoda;
    this.iconService.vehicle.manufacturer = 'skoda';
    break;
    case "פולקסווגן":
    this.iconService.selectedModelJson = this.iconService.carsJson.wolswagen;
    this.iconService.vehicle.manufacturer = 'wolswagen';
    break;
    case "פורד":
    this.iconService.selectedModelJson = this.iconService.carsJson.ford;
    this.iconService.vehicle.manufacturer = 'ford';
    break;
    case "פיאט":
    this.iconService.selectedModelJson = this.iconService.carsJson.fiat;
    this.iconService.vehicle.manufacturer = 'fiat';
    break;
    case "פיג'ו":
    this.iconService.selectedModelJson = this.iconService.carsJson.peugeot;
    this.iconService.vehicle.manufacturer = 'peugeot';
    break;
    case "קיה":
    this.iconService.selectedModelJson = this.iconService.carsJson.kia;
    this.iconService.vehicle.manufacturer = 'kia';
    break;
    case "קרייזלר":
    this.iconService.selectedModelJson = this.iconService.carsJson.crysler;
    this.iconService.vehicle.manufacturer = 'crysler';
    break;
    case "רובר":
    this.iconService.selectedModelJson = this.iconService.carsJson.rover;
    this.iconService.vehicle.manufacturer = 'rover';
    break;
    case "רנו":
    this.iconService.selectedModelJson = this.iconService.carsJson.renault;
    this.iconService.vehicle.manufacturer = 'renault';
    break;
    case "שברולט":
    this.iconService.selectedModelJson = this.iconService.carsJson.chevrolet;
    this.iconService.vehicle.manufacturer = 'chevrolet';
    break;
    }
  }

  YearChange(event: any) {
    if (event && event.value) {
      this.iconService.buttonClicked = true;
    }
  }

  SearchCar() {
    let index = this.iconService.selectedModel.years.indexOf(this.iconService.selectedYear);
    this.iconService.vehicle.iconsNumber = this.iconService.selectedModel.icons[index];
    if (this.iconService.selectedYear.includes('+')) {
    this.iconService.vehicle.isSingleYear = true;
    }
    this.iconService.vehicle.vehicleYear = this.iconService.selectedYear;
    if (this.iconService.selectedYear.includes('h')) {
    this.iconService.vehicle.isHybrid = true;
    }
    this.iconService.vehicle.vehicleType = this.iconService.selectedModel.englishModelName;
    this.iconService.searchCar(this.iconService.vehicle);
    this.router.navigateByUrl('icons');

  }

}
