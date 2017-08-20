import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'welcome/:userId', component: WelcomeComponent },
  { path: 'login/:userId', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
