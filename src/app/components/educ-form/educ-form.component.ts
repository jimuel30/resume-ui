import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Education } from '../../models/Education';
import { ApiService } from '../../services/api/api.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-educ-form',
    standalone: true,
    imports: [FormsModule, NgIf],
    templateUrl: './educ-form.component.html',
    styleUrl: './educ-form.component.scss',
})
export class EducFormComponent implements OnInit {
    @Input() education?: Education;
    @Input() forEdit!: boolean;

    saveEducation: Education = {
        educationId: 0,
        resumeId: 0,
        userId: 0,
        course: '',
        startDate: new Date(),
        endDate: new Date(),
        institutionName: '',
    };

    constructor(private apiService: ApiService) {}

    frontButtonText = 'ADD EDUCATION';

    ngOnInit(): void {
        if (this.forEdit) {
            this.frontButtonText = 'EDIT';

            if (this.education) {
                this.saveEducation = this.education;
            }
        }
    }

    submitHandler(): void {
        const url = environment.domain + environment.saveEducation + 0;
        this.apiService.genericSave(this.saveEducation, url).subscribe({
            next: (v) => console.log(v.data),
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }

    submitEditHandler(): void {
        //todo
    }

    showForm = false;

    toggleShowForm(): void {
        this.showForm = !this.showForm;
    }
}
