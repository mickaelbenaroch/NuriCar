import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
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
