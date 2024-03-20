import { Routes } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";

export const routes: Routes = [{ path: '', component: LandingPageComponent },
  { path: 'register', component: RegisterFormComponent },];
