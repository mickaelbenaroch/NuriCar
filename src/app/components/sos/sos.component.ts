import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({standalone: true, selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.scss']})
export class SosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Back(): void {
    this.router.navigateByUrl('main');
  }

}
