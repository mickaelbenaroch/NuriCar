import { Component, OnInit, ViewChild } from '@angular/core';
import { CarService } from './services/car.service';
import { IconServiceService } from './services/icon-service.service';
import { HamburgerMenuComponent } from './components/hamburger/hamburger.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
@Component({standalone: true, selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterModule, NgxUiLoaderModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']})
export class AppComponent implements OnInit {
  @ViewChild('menu') menu!: HamburgerMenuComponent;
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
