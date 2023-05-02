import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'menu',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerMenuComponent {
  isOpen = false;
  constructor(private router: Router) {}
  toggle() {
    this.isOpen = !this.isOpen;
  }
  navigate(page: string) : void {
    if (this.isOpen) {
      this.isOpen = false;
    }
    this.router.navigateByUrl(page);

  }
}