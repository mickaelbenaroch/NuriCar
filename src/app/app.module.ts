import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsPageComponent } from './components/icons-page/icons-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HybridPipe } from './pipes/hybrid.pipe';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';


const appRoutes: Routes = [
  { path: '' , component: SplashScreenComponent},
  { path: 'main' , component: MainPageComponent},
  { path: 'icons' , component: IconsPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IconsPageComponent,
    MainPageComponent,
    HybridPipe,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatSelectModule,
    MatInputModule,
    CommonModule,
    NgbModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
