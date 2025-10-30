import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconServiceService } from 'src/app/services/icon-service.service';

@Component({
  standalone: true, 
  selector: 'app-breadcums',
  templateUrl: './breadcums.component.html',
  styleUrls: ['./breadcums.component.scss'],
  imports: [CommonModule]
})
export class BreadcumsComponent implements OnInit {

  currentLocation: string = '';
  breadcrumbItems: string[] = [];
  
  constructor(private iconService: IconServiceService) { }

  ngOnInit(): void {
    if (this.iconService) {
      this.currentLocation = this.iconService.selectedManufacturer + ' ---> ' + this.iconService.selectedModel?.modelName + ' ---> ' + this.iconService.selectedYear;
      
      // Create breadcrumb items array
      this.breadcrumbItems = this.buildBreadcrumbItems();
    }
  }

  private buildBreadcrumbItems(): string[] {
    const items: string[] = [];
    
    if (this.iconService.selectedManufacturer) {
      items.push(this.iconService.selectedManufacturer);
    }
    
    if (this.iconService.selectedModel?.modelName) {
      items.push(this.iconService.selectedModel.modelName);
    }
    
    if (this.iconService.selectedYear) {
      items.push(this.iconService.selectedYear);
    }
    
    // Return items in reverse order for RTL display
    return items.reverse();
  }

}
