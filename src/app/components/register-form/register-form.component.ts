import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RegisterRequest } from '../../models/RegisterRequest';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'app-register-form',
    standalone: true,
    imports: [NgIf, FormsModule],
    templateUrl: './register-form.component.html',
    styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
    constructor(private apiService: ApiService) {}

    scrollIndex = 0;

    registerRequest: RegisterRequest = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        middleName: '',
        city: '',
    };
    confirmPassword = '';

    emailValid = false;
    passwordValid = false;
    firstNameValid = false;
    lastNameValid = false;
    middleNameValid = false;
    cityValid = false;
    confirmPasswordValid = false;

    //check if inputs are valid
    inputsValid = false;
    onTransition = false;

    scrollForm(forward: boolean): void {
        if (this.inputsValid || !forward) {
            this.scrollIndex = forward
                ? ++this.scrollIndex
                : --this.scrollIndex;
        }

        this.onTransition = !this.inputsValid && forward;

        let elementId = '';

        if (this.scrollIndex <= 0) {
            elementId = 'email-section';
            this.inputsValid = this.emailValid;
        } else if (this.scrollIndex === 1) {
            elementId = 'name-section';
            this.inputsValid =
                this.firstNameValid &&
                this.lastNameValid &&
                this.middleNameValid;
        } else if (this.scrollIndex == 2) {
            elementId = 'city-section';
            this.inputsValid = this.cityValid;
        } else {
            elementId = 'password-section';
            this.inputsValid = this.passwordValid && this.confirmPasswordValid;
        }

        const element = document.getElementById(elementId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    submitFormHandler(): void {
        this.apiService.register(this.registerRequest).subscribe({
            next: (v) => {
                localStorage.setItem('token', JSON.stringify(v.data.body.data));
            },
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }

    onEmailChange() {
        const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.emailValid = emailRegex.test(this.registerRequest.email);
        this.inputsValid = this.emailValid;
    }

    onNameChange(nameIndex: number) {
        let firstValid = this.isValidName(this.registerRequest.firstName);
        let middleValid = this.isValidName(this.registerRequest.middleName);
        let lastValid = this.isValidName(this.registerRequest.lastName);

        this.inputsValid = firstValid && middleValid && lastValid;

        if (0 === nameIndex) {
            this.firstNameValid = firstValid;
        } else if (1 === nameIndex) {
            this.middleNameValid = middleValid;
        } else {
            this.lastNameValid = lastValid;
        }
    }

    onCityChange(): void {
        const trimmedName = this.registerRequest.city.trim();
        this.inputsValid = trimmedName !== '';
        this.cityValid = this.inputsValid;
    }

    onPasswordChange() {
        const passwordSize = this.registerRequest.password.length;
        this.passwordValid = 7 < passwordSize;
        this.onTransition = !this.passwordValid;
        this.confirmPasswordValid =
            this.registerRequest.password === this.confirmPassword;
    }

    isValidName(name: string): boolean {
        const trimmedName = name.trim();
        const isNotEmpty = trimmedName !== '';
        const containsValidCharacters = /^[A-Za-z\s\-']+$/u.test(trimmedName);
        return isNotEmpty && containsValidCharacters;
    }
}
