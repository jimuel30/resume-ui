import { Component } from '@angular/core';
import { EducFormComponent } from '../educ-form/educ-form.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-educ-section',
    standalone: true,
    imports: [EducFormComponent, NgIf],
    templateUrl: './educ-section.component.html',
    styleUrl: './educ-section.component.scss',
})
export class EducSectionComponent {
    showForm = false;

    toggleShowForm(): void {
        this.showForm = !this.showForm;
    }
}
