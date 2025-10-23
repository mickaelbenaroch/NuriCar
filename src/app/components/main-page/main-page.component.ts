import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { IconServiceService } from 'src/app/services/icon-service.service';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { HybridPipe } from 'src/app/pipes/hybrid.pipe';

@Component({standalone: true, selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  imports: [CommonModule, FormsModule, NgSelectModule, HybridPipe],
  styleUrls: ['./main-page.component.scss']})
export class MainPageComponent implements OnInit{

    images = [
      // '/assets/symbols/audi.png', 
      '/assets/symbols/opel.png',
      //'/assets/symbols/alpha.jpg',
      //'/assets/symbols/bmw.jpg',
      //'/assets/symbols/jeep.jpg', 
      //'/assets/symbols/dacia.jpg',
      //'/assets/symbols/dayatsu.png',
      '/assets/symbols/honda.png', 
      '/assets/symbols/volvo.jpg',
      '/assets/symbols/toyota.jpg', 
      '/assets/symbols/hunday.jpg',
      '/assets/symbols/mazda.png', 
      //'/assets/symbols/mini.jpg', 
      '/assets/symbols/mitsubishi.png',
      //'/assets/symbols/mercedes.jpg',
      '/assets/symbols/nissan.jpg', 
      '/assets/symbols/subaru.jpg', 
      '/assets/symbols/suziki.jpg',
      '/assets/symbols/seat.jpg',
      '/assets/symbols/citroen.png',
      //'/assets/symbols/smart.png',
      '/assets/symbols/skoda.png', 
      //'/assets/symbols/wolswagen.jpg',
      '/assets/symbols/ford.jpg',
      '/assets/symbols/fiat.jpg', 
      '/assets/symbols/peugeot.jpg', 
      '/assets/symbols/kia.jpg',
      //'/assets/symbols/crysler.png', 
      '/assets/symbols/renault.jpg',
      '/assets/symbols/chevrolet.jpg', 
    ];
    carsnames = [
      //"אאודי",
      "אופל",
      //"אלפא רומיאו",
      //"ב.מ.וו",
      //"ג'יפ / Jeep",
      //"דאצ'יה",
      //"דייהטסו",
      "הונדה",
      "וולוו",
      "טויוטה",
      "יונדאי",
      "מאזדה",
      //"מיני",
      "מיצובישי",
      //"מרצדס",
      "ניסאן",
      "סובארו",
      "סוזוקי",
      "סיאט",
      "סיטרואן",
      //"סמארט",
      "סקודה",
      //"פולקסווגן",
      "פורד",
      "פיאט",
      "פיג'ו",
      "קיה",
      //"קרייזלר",
      "רנו",
      "שברולט",
  ];
  title = 'WarningLightsApp';
  step = 0;

  @HostListener('window:popstate', ['$event'])
    onPopState(event) {
    this.ngOnInit();
  }

constructor(private router: Router, public iconService: IconServiceService, public carService: CarService) {}

  ngOnInit() {
    // let currentUrl = location.pathname;
    // if (currentUrl === '/' && this.iconService.buttonClicked) {
    // this.iconService.buttonClicked = false;
    // }
    // if (currentUrl === '/icons' && !this.iconService.buttonClicked) {
    // this.router.navigateByUrl('');
    // }
    // let htmlHeight = document.getElementsByTagName('html')[0].offsetHeight;
    // let envelopMainPageHeight = (document.getElementsByClassName('envelopMainPage')[0] as HTMLElement).offsetHeight;
    // if (htmlHeight < envelopMainPageHeight) {
    //   document.getElementsByTagName('html')[0].style.height = "unset";
    // } else {
    //   document.getElementsByTagName('html')[0].style.height = "100%";
    // }
  }

  ManufacturerChange(event: any) {
    console.log('entered method ManufacturerChange with event : ' + event);
    if (event) {
      // First, clear all dependent state immediately
      this.iconService.selectedModel = null;
      this.iconService.selectedYear = '';
      this.iconService.modelChoosen = false;
      this.iconService.buttonClicked = false;
      this.iconService.selectedModelJson = []; // Clear immediately
      
      console.log('entered if with event : ' + event);
      this.iconService.selectedManufacturer = event;
      console.log('this.iconService.selectedManufacturer = ' + event);
      
      // Use setTimeout to ensure state is cleared before updating
      setTimeout(() => {
        this.initModels();
        this.iconService.manufacturerChoosen = true;
      }, 0);
      
      console.log('exit from method ManufacturerChange ');
    }
  }

  ModelChange(event: any) {
    console.log('entered method ModelChange');
    if (event) {
      // Reset dependent dropdown and state
      this.iconService.selectedYear = '';
      this.iconService.buttonClicked = false;
      this.iconService.modelChoosen = false;
      
      console.log('entered in to first if with event : ' + event);
      
      // Use setTimeout to ensure clean state transition
      setTimeout(() => {
        this.iconService.selectedModel = event;
        console.log('event.value : ' + event);
        
        if (this.iconService.selectedModel && this.iconService.selectedModel.years) {
          console.log('entered in to second if with this.iconService.selectedModel : ' + this.iconService.selectedModel);
          console.log('entered in to second if with this.iconService.selectedModel.years : ' + this.iconService.selectedModel.years);
          
          // Create a filtered copy instead of modifying the original
          const filteredYears: string[] = [];
          console.log('before foreach with years : ' + this.iconService.selectedModel.years);
          
          this.iconService.selectedModel.years.forEach((year: string) => {
            if (year !== 'hybrid') {
              console.log('pushed year : ' + year)
              filteredYears.push(year);
            }
          });
          
          console.log('finished foreach with filtered years array : ' + filteredYears);
          
          // Store the filtered years in a separate property to avoid modifying original data
          this.iconService.selectedModel.filteredYears = filteredYears;
        }
        
        this.iconService.modelChoosen = true;
      }, 0);
    }
    console.log('exit from method ');
  }

  Back() {
    this.router.navigateByUrl('');
  }


  initModels() {
    console.log('entered initModels method with : ' + this.iconService.selectedManufacturer);
    if (!this.iconService.selectedManufacturer) {
      return;
    }
    
    // Clear previous model selection
    this.iconService.selectedModelJson = [];
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
    console.log('this.iconService.vehicle.manufacturer = ' + this.iconService.vehicle.manufacturer);
    
    // Filter and validate the results
    const filteredModels = this.carService.cars.filter(c => c.title === this.iconService.vehicle.manufacturer);
    console.log('Raw filtered models:', filteredModels);
    console.log('Number of models found:', filteredModels.length);
    
    // Ensure we have valid models with required properties
    this.iconService.selectedModelJson = filteredModels.filter(model => 
      model && model.modelName && model.englishModelName
    );
    
    console.log('Final validated selectedModelJson:', this.iconService.selectedModelJson);
    console.log('Number of valid models:', this.iconService.selectedModelJson.length);

  }

  YearChange(event: any) {
    if (event) {
      this.iconService.buttonClicked = true;
    }
  }

  SearchCar() {
    // Find the index in the original years array (not the filtered one)
    // because the icons array corresponds to the original years array
    const originalYears = this.iconService.selectedModel.years;
    let index = originalYears.indexOf(this.iconService.selectedYear);
    
    // If not found in original, try to find a matching year that might include 'h'
    if (index === -1) {
      index = originalYears.findIndex(year => 
        year.replace('h', '') === this.iconService.selectedYear ||
        year === this.iconService.selectedYear + 'h'
      );
    }
    
    console.log('Selected year:', this.iconService.selectedYear);
    console.log('Original years:', originalYears);
    console.log('Found index:', index);
    
    if (index !== -1) {
      this.iconService.vehicle.iconsNumber = this.iconService.selectedModel.icons[index];
      
      if (this.iconService.selectedYear.includes('+')) {
        this.iconService.vehicle.isSingleYear = true;
      }
      
      this.iconService.vehicle.vehicleYear = this.iconService.selectedYear;
      
      // Check if the original year at this index includes 'h' for hybrid detection
      if (originalYears[index].includes('h')) {
        this.iconService.vehicle.isHybrid = true;
      } else {
        this.iconService.vehicle.isHybrid = false;
      }
      
      this.iconService.vehicle.vehicleType = this.iconService.selectedModel.englishModelName;
      this.iconService.searchCar(this.iconService.vehicle);
      this.router.navigateByUrl('icons');
    } else {
      console.error('Could not find selected year in original years array');
    }
  }

}
