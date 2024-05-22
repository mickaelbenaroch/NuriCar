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
    let htmlHeight = document.getElementsByTagName('html')[0].offsetHeight;
    let envelopMainPageHeight = (document.getElementsByClassName('envelopSplash')[0] as HTMLElement).offsetHeight;
    if (htmlHeight < envelopMainPageHeight) {
      document.getElementsByTagName('html')[0].style.height = "unset";
    } else {
      document.getElementsByTagName('html')[0].style.height = "100%";
    }
    setTimeout(() => {
      this.splash = false;
    },3000);
  }

  GoToMainPage() {
    this.router.navigateByUrl('main');
  }

}
