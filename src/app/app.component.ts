import { Component, HostListener, OnInit } from '@angular/core';
import { VehiculeEntity} from 'src/app/models/VehiculeModel'
import { Cars} from 'src/app/models/Cars'
import { VehiculeTypes} from 'src/app/models/vehiculesTypes'
import { Router } from '@angular/router';
import { IconServiceService } from './services/icon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  images = ['/assets/symbols/abarth.jpg', 
            '/assets/symbols/alpha.jpg',
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
            '/assets/symbols/sanyang.jpg', 
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
            "אברת",
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
            "סאנגיונג",
            "סיאט",
            "סקודה",
            "סמארט",
            "סובארו",
            "סוזוקי",
            "טויוטה",
            "וולוו",
            "פולקסווגן"
  ];
  public modelChoosen: boolean = false;
  public manufacturerChoosen: boolean = false;
  public yearChoosen: boolean = false;
  title = 'WarningLightsApp';
  selectedValue: string;
  selectedCar: string;
  selectedModel: string;
  selectedYears: string;
  selectedCarIconsNumber: number;
  carCollection: Cars = new Cars();
  carModels: string[] = [];
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
    switch (this.selectedCar) {
      case "אאודי":
        break;
      case "אברת":
        break;
      case "אוטוביאנקי":
        break;
      case "אולדסמוביל":
        break;
      case "אוסטין":
        break;
      case "אופל":
        break;
      case "אינפיניטי":
        break;
      case "אל.טי.איי":
        break;
      case "אלפא רומיאו":
        break;
      case "אם. ג'י. / MG":
        break;
      case "אסטון מרטין":
        break;
      case "ב.מ.וו":
        break;
      case "ביואיק":
        break;
      case "בנטלי":
        break;
      case "ג'י.איי.סי/GAC":
        break;
      case "ג'יאו - Geo":
        break;
      case "ג'יפ / Jeep":
        break;
      case "גרייט וול":
        break;
      case "דאצ'יה":
        break;
      case "דודג'":
        break;
      case "די.אס / DS":
        break;
      case "דייהו":
        break;
      case "דייהטסו":
        break;
      case "הונדה":
        break;
      case "וולוו":
        break;
      case "טויוטה":
        this.selectedModel = this.carCollection.toyota[0].modelName;
        break;
      case "טסלה":
        break;
      case "יגואר":
        break;
      case "יונדאי":
        break;
      case "לאדה":
        break;
      case "לינקולן":
        break;
      case"ליצ'י":
        break;
      case "למבורגיני":
        break;
      case "לנצ'יה":
        break;
      case"לקסוס":
        break;
      case"מאזדה":
        this.selectedModel = this.carCollection.mazda[0].modelName;
        break;
      case "מזראטי":
        break;
      case"מיני":
        break;
      case "מיצובישי":
        break;
      case "מרצדס":
        break;
      case "ניסאן":
        break;
      case "ננג'ינג":
        break;
      case "סאאב":
        break;
      case "סאנגיונג":
        break;
      case "סאנשיין":
        break;
      case "סובארו":
        break;
      case "סוזוקי":
        break;
      case "סיאט":
        break;
      case "סיטרואן":
        break;
      case "סמארט":
        break;
      case "סקודה":
        break;
      case "פולקסווגן":
        break;
      case "פונטיאק":
        break;
      case "פורד":
        break;
      case "פורשה":
        break;
      case "פיאט":
        break;
      case "פיג'ו":
        break;
      case "פרארי":
        break;
      case "קאדילק":
        break;
      case "קיה":
        break;
      case "קרייזלר":
        break;
      case "רובר":
        break;
      case "רנו":
        break;
      case "שברולט":
        break;
    }
  }

  modelChosen(model?: any) : any {
    this.yearsToDisplay = [];
    this.selectedModel = model.target.value;
    this.modelChoosen = true;
    let temp;
    switch (this.selectedModel) {
      case "3":
        temp = this.carCollection.mazda.find(c => c.modelName === model.target.value);
        break;
  //TODO: handle other cases not only Mazda
      default:
        temp = this.carCollection.mazda.find(c => c.modelName === model.target.value);
        break;
    }
    if (temp ) {
      temp.years.forEach(year => {
        this.yearsToDisplay.push(year);
      })
    }
    this.selectedYears = this.yearsToDisplay[0];
    let temp2 = this.carCollection.mazda.find(c => c.modelName === this.selectedModel);
    this.yearIndex = temp.years.indexOf(this.selectedYears);
    this.selectedCarIconsNumber = temp2.icons[this.yearIndex];
    this.yearChoosen = true;
  }

  yearsChoosen(event: any) {
    this.selectedYears = event.target.value;
    let temp = this.carCollection.mazda.find(c => c.modelName === this.selectedModel);
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
        temp = this.carCollection.mazda.find(c => c.modelName === param);
        break;
  //TODO: handle other cases not only Mazda
      default:
        temp = this.carCollection.mazda.find(c => c.modelName === param);
        break;
    }
    if (temp ) {
      temp.years.forEach(year => {
        this.yearsToDisplay.push(year);
      })
    }
    this.selectedYears = this.yearsToDisplay[0];
    let temp2 = this.carCollection.mazda.find(c => c.modelName === this.selectedModel);
    this.yearIndex = temp.years.indexOf(this.selectedYears);
    this.selectedCarIconsNumber = temp2.icons[this.yearIndex];
    this.yearChoosen = true;
  }
}
