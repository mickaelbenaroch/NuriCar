import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FocusedIconComponent } from './components/focused-icon/focused-icon.component';
import { HelpComponent } from './components/help/help.component';
import { IconsPageComponent } from './components/icons-page/icons-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PolicyComponent } from './components/policy/policy.component';
import { SosComponent } from './components/sos/sos.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { TipsComponent } from './components/tips/tips.component';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
