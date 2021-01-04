import { Component, HostListener, OnInit } from '@angular/core';
import { Cars} from 'src/app/models/Cars'
import { Router } from '@angular/router';
import { IconServiceService } from './services/icon-service.service';
import { Car } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  images = ['/assets/symbols/alpha.jpg',
            '/assets/symbols/audi.png', 
            '/assets/symbols/bmw.jpg',
            '/assets/symbols/chevrolet.jpg', 
            '/assets/symbols/citroen.png',
            '/assets/symbols/crysler.png', 
            '/assets/symbols/dacia.jpg',
            '/assets/symbols/daewoo.jpg', 
            '/assets/symbols/dayatsu.png',
            '/assets/symbols/fiat.jpg', 
            '/assets/symbols/ford.jpg',
            '/assets/symbols/honda.png', 
            '/assets/symbols/hunday.jpg',
            '/assets/symbols/jeep.jpg', 
            '/assets/symbols/kia.jpg',
            '/assets/symbols/mazda.png', 
            '/assets/symbols/mercedes.jpg',
            '/assets/symbols/mini.jpg', 
            '/assets/symbols/mitsubishi.png',
            '/assets/symbols/nissan.jpg', 
            '/assets/symbols/opel.png',
            '/assets/symbols/peugeot.jpg', 
            '/assets/symbols/renault.jpg',
            '/assets/symbols/rover.jpg',
            '/assets/symbols/seat.jpg',
            '/assets/symbols/skoda.png', 
            '/assets/symbols/smart.png',
            '/assets/symbols/subaru.jpg', 
            '/assets/symbols/suziki.jpg',
            '/assets/symbols/toyota.jpg', 
            '/assets/symbols/volvo.jpg',
            '/assets/symbols/wolswagen.jpg',
          ];
  carsnames = [
            "אלפא רומיאו",
            "אאודי",
            "ב.מ.וו",
            "שברולט",
            "סיטרואן",
            "קרייזלר",
            "דאצ'יה",
            "דייהו",
            "דייהטסו",
            "פיאט",
            "פורד",
            "הונדה",
            "יונדאי",
            "ג'יפ / Jeep",
            "קיה",
            "מאזדה",
            "מרצדס",
            "מיני",
            "מיצובישי",
            "ניסאן",
            "אופל",
            "פיג'ו",
            "רנו",
            "רובר",
            "סיאט",
            "סקודה",
            "סמארט",
            "סובארו",
            "סוזוקי",
            "טויוטה",
            "וולוו",
            "פולקסווגן"
  ];
  public manufacturerChoosen: boolean = false;
  public modelChoosen: boolean = false;
  public yearChoosen: boolean = false;
  title = 'WarningLightsApp';
  selectedManufacturer: string;
  selectedModel: string;
  selectedYear: string;
  buttonClicked: boolean = false;
  public carsJson = new Cars();
  public selectedModelJson = new Array<Car>();

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
      this.manufacturerChoosen = true;
      this.initModels();
    }
  }

  ModelChange(event: any) {
    if (event) {
      this.selectedModel = event.value;
      this.modelChoosen = true;
    }
  }


  initModels() {
    if (!this.selectedManufacturer) {
      return;
    }
    switch (this.selectedManufacturer) {
      case "אאודי":
        this.selectedModelJson = this.carsJson.audi;
        break;
      case "אופל":
        this.selectedModelJson = this.carsJson.opel;
        break;
      case "אלפא רומיאו":
        this.selectedModelJson = this.carsJson.alpha;
        break;
      case "ב.מ.וו":
        this.selectedModelJson = this.carsJson.bmw;
        break;
      case "ג'יפ / Jeep":
        this.selectedModelJson = this.carsJson.jeep;
        break;
      case "דאצ'יה":
        this.selectedModelJson = this.carsJson.dacia;
        break;      
      case "דייהו":
        this.selectedModelJson = this.carsJson.daewoo;
        break;
      case "דייהטסו":
        this.selectedModelJson = this.carsJson.dayatsu;
        break;
      case "הונדה":
        this.selectedModelJson = this.carsJson.honda;
        break;
      case "וולוו":
        this.selectedModelJson = this.carsJson.volvo;
        break;
      case "טויוטה":
        this.selectedModelJson = this.carsJson.toyota;
        break;
      case "יונדאי":
        this.selectedModelJson = this.carsJson.hunday;
        break; 
      case"מאזדה":
        this.selectedModelJson = this.carsJson.mazda;
        break;
      case"מיני":
        this.selectedModelJson = this.carsJson.mini;
        break;
      case "מיצובישי":
        this.selectedModelJson = this.carsJson.mistubishi;
        break;
      case "מרצדס":
        this.selectedModelJson = this.carsJson.mercedes;
        break;
      case "ניסאן":
        this.selectedModelJson = this.carsJson.nissan;
        break;
      case "סובארו":
        this.selectedModelJson = this.carsJson.subaru;
        break;
      case "סוזוקי":
        this.selectedModelJson = this.carsJson.suzuki;
        break;
      case "סיאט":
        this.selectedModelJson = this.carsJson.seat;
        break;
      case "סיטרואן":
        this.selectedModelJson = this.carsJson.citroen;
        break;
      case "סמארט":
        this.selectedModelJson = this.carsJson.smart;
        break;
      case "סקודה":
        this.selectedModelJson = this.carsJson.skoda;
        break;
      case "פולקסווגן":
        this.selectedModelJson = this.carsJson.wolswagen;
        break;
      case "פורד":
        this.selectedModelJson = this.carsJson.ford;
        break;
      case "פיאט":
        this.selectedModelJson = this.carsJson.fiat;
        break;
      case "פיג'ו":
        this.selectedModelJson = this.carsJson.peugeot;
        break;
      case "קיה":
        this.selectedModelJson = this.carsJson.kia;
        break;
      case "קרייזלר":
        this.selectedModelJson = this.carsJson.crysler;
        break;
      case "רובר":
        this.selectedModelJson = this.carsJson.rover;
        break;
      case "רנו":
        this.selectedModelJson = this.carsJson.renault;
        break;
      case "שברולט":
        this.selectedModelJson = this.carsJson.chevrolet;
        break;
    }
  }

  modelChosen(model?: any) : any {
  }

  yearsChoosen(event: any) {
  }

  searchCar() {
  }
}
