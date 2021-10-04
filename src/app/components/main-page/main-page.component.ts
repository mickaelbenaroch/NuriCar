import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconServiceService } from 'src/app/services/icon-service.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

    images = [
      '/assets/symbols/audi.png', 
      '/assets/symbols/opel.png',
      '/assets/symbols/alpha.jpg',
      '/assets/symbols/bmw.jpg',
      '/assets/symbols/jeep.jpg', 
      '/assets/symbols/dacia.jpg',
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
      "רנו",
      "שברולט",
  ];
  title = 'WarningLightsApp';

  @HostListener('window:popstate', ['$event'])
    onPopState(event) {
    this.ngOnInit();
  }

constructor(private router: Router, public iconService: IconServiceService, public carService: CarService) {}

  ngOnInit() {
    let currentUrl = location.pathname;
    if (currentUrl === '/' && this.iconService.buttonClicked) {
    this.iconService.buttonClicked = false;
    }
    if (currentUrl === '/icons' && !this.iconService.buttonClicked) {
    this.router.navigateByUrl('');
    }
    let htmlHeight = document.getElementsByTagName('html')[0].offsetHeight;
    let envelopMainPageHeight = (document.getElementsByClassName('envelopMainPage')[0] as HTMLElement).offsetHeight;
    if (htmlHeight < envelopMainPageHeight) {
      document.getElementsByTagName('html')[0].style.height = "unset";
    } else {
      document.getElementsByTagName('html')[0].style.height = "100%";
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
    console.log('entered method ModelChange');
    if (event) {
      console.log('entered in to first if with event : ' + event);
        this.iconService.selectedModel = event.value;
        console.log('event.value : ' + event.value);
      if (this.iconService.selectedModel && this.iconService.selectedModel.years) {
        console.log('entered in to second if with this.iconService.selectedModel : ' + this.iconService.selectedModel);
        console.log('entered in to second if with this.iconService.selectedModel.years : ' + this.iconService.selectedModel.years);
        let newYears = [];
        console.log('before foreach with years : ' + this.iconService.selectedModel.years);
        this.iconService.selectedModel.years.forEach(year => {
        if (year !== 'hybrid') {
          console.log('pushed year : ' + year)
          newYears.push(year);
        }
    });
    console.log('finished foreach with newyears array : ' + newYears);
      this.iconService.selectedModel.years = newYears;
    }
      this.iconService.modelChoosen = true;
    }
    console.log('exit from method ');
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
    this.iconService.vehicle.manufacturer = 'audi';
    break;
    case "אופל":
      this.iconService.vehicle.manufacturer = 'opel';
    break;
    case "אלפא רומיאו":
    this.iconService.vehicle.manufacturer = 'alpha';
    break;
    case "ב.מ.וו":
    this.iconService.vehicle.manufacturer = 'bmw';
    break;
    case "ג'יפ / Jeep":
    this.iconService.vehicle.manufacturer = 'jeep';
    break;
    case "דאצ'יה":
    this.iconService.vehicle.manufacturer = 'dacia';
    break;      
    case "דייהו":
    this.iconService.vehicle.manufacturer = 'daewoo';
    break;
    case "דייהטסו":
    this.iconService.vehicle.manufacturer = 'dayatsu';
    break;
    case "הונדה":
    this.iconService.vehicle.manufacturer = 'honda';
    break;
    case "וולוו":
    this.iconService.vehicle.manufacturer = 'volvo';
    break;
    case "טויוטה":
    this.iconService.vehicle.manufacturer = 'toyota';
    break;
    case "יונדאי":
    this.iconService.vehicle.manufacturer = 'hunday';
    break; 
    case"מאזדה":
    this.iconService.vehicle.manufacturer = 'mazda';
    break;
    case"מיני":
    this.iconService.vehicle.manufacturer = 'mini';
    break;
    case "מיצובישי":
    this.iconService.vehicle.manufacturer = 'mitsubishi';
    break;
    case "מרצדס":
    this.iconService.vehicle.manufacturer = 'mercedes';
    break;
    case "ניסאן":
    this.iconService.vehicle.manufacturer = 'nissan';
    break;
    case "סובארו":
    this.iconService.vehicle.manufacturer = 'subaru';
    break;
    case "סוזוקי":
    this.iconService.vehicle.manufacturer = 'suzuki';
    break;
    case "סיאט":
    this.iconService.vehicle.manufacturer = 'seat';
    break;
    case "סיטרואן":
    this.iconService.vehicle.manufacturer = 'citroen';
    break;
    case "סמארט":
    this.iconService.vehicle.manufacturer = 'smart';
    break;
    case "סקודה":
    this.iconService.vehicle.manufacturer = 'skoda';
    break;
    case "פולקסווגן":
    this.iconService.vehicle.manufacturer = 'wolswagen';
    break;
    case "פורד":
    this.iconService.vehicle.manufacturer = 'ford';
    break;
    case "פיאט":
    this.iconService.vehicle.manufacturer = 'fiat';
    break;
    case "פיג'ו":
    this.iconService.vehicle.manufacturer = 'peugeot';
    break;
    case "קיה":
    this.iconService.vehicle.manufacturer = 'kia';
    break;
    case "קרייזלר":
    this.iconService.vehicle.manufacturer = 'crysler';
    break;
    case "רובר":
    this.iconService.vehicle.manufacturer = 'rover';
    break;
    case "רנו":
    this.iconService.vehicle.manufacturer = 'renault';
    break;
    case "שברולט":
    this.iconService.vehicle.manufacturer = 'chevrolet';
    break;
    }
    this.iconService.selectedModelJson = this.carService.cars.filter(c => c.title === this.iconService.vehicle.manufacturer);
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
    if (this.iconService.selectedModel.years[index].includes('h')) {
    this.iconService.vehicle.isHybrid = true;
    } else {
      this.iconService.vehicle.isHybrid = false;
    }
    this.iconService.vehicle.vehicleType = this.iconService.selectedModel.englishModelName;
    this.iconService.searchCar(this.iconService.vehicle);
    this.router.navigateByUrl('icons');

  }

}
