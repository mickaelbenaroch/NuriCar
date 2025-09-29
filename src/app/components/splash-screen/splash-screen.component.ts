import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({standalone: true, selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./splash-screen.component.scss']})
export class SplashScreenComponent implements OnInit {
  splash = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.splash = false;
    },3000);
  }

  GoToMainPage() {
    this.router.navigateByUrl('main');
  }

}
