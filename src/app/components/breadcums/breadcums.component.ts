import { Component, OnInit } from '@angular/core';
import { IconServiceService } from 'src/app/services/icon-service.service';

@Component({standalone: true, selector: 'app-breadcums',
  templateUrl: './breadcums.component.html',
  styleUrls: ['./breadcums.component.scss']})
export class BreadcumsComponent implements OnInit {

  currentLocation: string = '';
  constructor(private iconService: IconServiceService) { }

  ngOnInit(): void {
    if (this.iconService) {
      this.currentLocation = this.iconService.selectedManufacturer + ' ---> ' + this.iconService.selectedModel?.modelName + ' ---> ' + this.iconService.selectedYear;
    }
  }

}
