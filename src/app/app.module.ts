import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HybridPipe } from './pipes/hybrid.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/main-page/main-page.component';
import { IconsPageComponent } from './components/icons-page/icons-page.component';
import { FocusedIconComponent } from './components/focused-icon/focused-icon.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { MissingLightsComponent } from './components/missing-lights/missing-lights.component';
import { NotificationsComponent } from './components/notifications/notifications.component';


const appRoutes: Routes = [
  { path: '' , component: SplashScreenComponent},
  { path: 'main' , component: MainPageComponent},
  { path: 'icons' , component: IconsPageComponent},
  { path: 'focus', component: FocusedIconComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IconsPageComponent,
    MainPageComponent,
    HybridPipe,
    SplashScreenComponent,
    FocusedIconComponent,
    MissingLightsComponent,
    NotificationsComponent
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
    FormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MissingLightsComponent
  ]
})
export class AppModule { }
