import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SplashComponent } from './splash/splash.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HowToComponent } from './how-to/how-to.component';
import { BuildsDomainsComponent } from './builds-domains/builds-domains.component';
import { BuildsOptionsComponent } from './builds-options/builds-options.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'builds/domains',
    component: BuildsDomainsComponent
  },
  {
    path: 'builds/options',
    component: BuildsOptionsComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SplashComponent,
    BenefitsComponent,
    LoginComponent,
    SignupComponent,
    HowToComponent,
    BuildsDomainsComponent,
    BuildsOptionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
