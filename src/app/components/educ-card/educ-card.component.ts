import { Component, Input } from '@angular/core';
import { Education } from '../../models/Education';
import { NgIf } from '@angular/common';
import { EducFormComponent } from '../educ-form/educ-form.component';

@Component({
    selector: 'app-educ-card',
    standalone: true,
    imports: [NgIf, EducFormComponent],
    templateUrl: './educ-card.component.html',
    styleUrl: './educ-card.component.scss',
})
export class EducCardComponent {
    @Input() education!: Education;
}
