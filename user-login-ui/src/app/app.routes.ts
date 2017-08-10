import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:userId', component: WelcomeComponent },
  { path: 'login/:userId', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
