import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

// Import route configuration from app module
import { MainPageComponent } from './app/components/main-page/main-page.component';
import { IconsPageComponent } from './app/components/icons-page/icons-page.component';
import { FocusedIconComponent } from './app/components/focused-icon/focused-icon.component';
import { SplashScreenComponent } from './app/components/splash-screen/splash-screen.component';
import { HelpComponent } from './app/components/help/help.component';
import { TipsComponent } from './app/components/tips/tips.component';
import { SosComponent } from './app/components/sos/sos.component';
import { PolicyComponent } from './app/components/policy/policy.component';
import { ContactComponent } from './app/components/contact/contact.component';

const routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'icons', component: IconsPageComponent },
  { path: 'focus', component: FocusedIconComponent },
  { path: 'help', component: HelpComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'sos', component: SosComponent },
  { path: 'policy', component: PolicyComponent },
  { path: 'contact', component: ContactComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(NgxUiLoaderModule)
  ]
}).catch(err => console.error(err));
