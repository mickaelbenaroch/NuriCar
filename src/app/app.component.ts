import { Component, ElementRef, EventEmitter, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CarService } from './services/car.service';
import { IconServiceService } from './services/icon-service.service';
import { HamburgerMenuComponent } from './components/hamburger/hamburger.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('menu') menu: HamburgerMenuComponent;
  constructor(public carService: CarService,
              private iconService: IconServiceService) {}

  ngOnInit(): void {
    this.carService.getCars();
    this.iconService.getIconsApiCall();
  }
  closeMenu() {
    this.menu.isOpen = false;
  }
}
