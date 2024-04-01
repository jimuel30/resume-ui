import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'dashboard', component: DashboardPageComponent },
    { path: 'resume/:resumeId', component: ResumePageComponent },
];
