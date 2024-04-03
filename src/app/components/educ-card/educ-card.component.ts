import { Component, Input } from '@angular/core';
import { Education } from '../../models/Education';
import { NgIf } from '@angular/common';
import { EducFormComponent } from '../educ-form/educ-form.component';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'app-educ-card',
    standalone: true,
    imports: [NgIf, EducFormComponent],
    templateUrl: './educ-card.component.html',
    styleUrl: './educ-card.component.scss',
})
export class EducCardComponent {
    @Input() education!: Education;

    constructor(private apiService: ApiService) {}

    submitDeleteHandler(): void {
        const url =
            environment.domain +
            environment.deleteEducation +
            this.education.educationId;
        this.apiService.genericDelete(url).subscribe({
            next: (v) => console.log(v.data),
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }
}
