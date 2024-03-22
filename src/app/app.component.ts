import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { LoginFormComponent } from './components/login-form/login-form.component';

declare var particlesJS: any;

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, LandingPageComponent, LoginFormComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    ngOnInit(): void {
        particlesJS.load('particles-js', '../assets/particles.json', null);
    }
}
