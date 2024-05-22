import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HybridPipe } from './pipes/hybrid.pipe';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgSelectModule } from '@ng-select/ng-select';
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
import { BreadcumsComponent } from './components/breadcums/breadcums.component';
import { IconColorPipe } from './pipes/icon-color.pipe';
import { HamburgerMenuComponent } from './components/hamburger/hamburger.component';
import { ClickOutsideDirective } from './directives/click-ouside.directive';
import { HelpComponent } from './components/help/help.component';
import { TipsComponent } from './components/tips/tips.component';
import { SosComponent } from './components/sos/sos.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ContactComponent } from './components/contact/contact.component';


const appRoutes: Routes = [
  { path: '' , component: SplashScreenComponent},
  { path: 'main' , component: MainPageComponent},
  { path: 'icons' , component: IconsPageComponent},
  { path: 'focus', component: FocusedIconComponent},
  { path: 'help', component: HelpComponent},
  { path: 'tips', component: TipsComponent},
  { path: 'sos', component: SosComponent},
  { path: 'policy', component: PolicyComponent},
  { path: 'contact', component: ContactComponent},

];

@NgModule({
  declarations: [
    HybridPipe,
    AppComponent,
    MainPageComponent,
    IconsPageComponent,
    FocusedIconComponent,
    SplashScreenComponent,
    MissingLightsComponent,
    NotificationsComponent,
    BreadcumsComponent,
    IconColorPipe,
    HamburgerMenuComponent,
    ClickOutsideDirective,
    HelpComponent,
    TipsComponent,
    SosComponent,
    PolicyComponent,
    ContactComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    MatInputModule,
    NgSelectModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
