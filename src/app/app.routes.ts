import { Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AppScreenComponent } from './app-screen/app-screen.component';

export const routes: Routes = [
  { path: '', component: MainScreenComponent},
  { path: 'traductor', component: AppScreenComponent },
];
