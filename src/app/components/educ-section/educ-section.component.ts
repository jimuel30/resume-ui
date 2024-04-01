import { Component, Input } from '@angular/core';
import { EducFormComponent } from '../educ-form/educ-form.component';
import { NgForOf, NgIf } from '@angular/common';
import { Education } from '../../models/Education';
import { EducCardComponent } from '../educ-card/educ-card.component';

@Component({
    selector: 'app-educ-section',
    standalone: true,
    imports: [EducFormComponent, NgIf, NgForOf, EducCardComponent],
    templateUrl: './educ-section.component.html',
    styleUrl: './educ-section.component.scss',
})
export class EducSectionComponent {
    @Input() educationList!: Education[];
}
