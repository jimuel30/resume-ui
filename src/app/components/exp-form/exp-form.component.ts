import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Education } from '../../models/Education';
import { ApiService } from '../../services/api/api.service';
import { environment } from '../../../environments/environment';
import { Experience, Responsibility } from '../../models/Experience';
import { Console } from 'inspector';

@Component({
    selector: 'app-exp-form',
    standalone: true,
    imports: [FormsModule, NgIf],
    templateUrl: './exp-form.component.html',
    styleUrl: './exp-form.component.scss',
})
export class ExpFormComponent implements OnInit {
    @Input() experience?: Experience;
    @Input() forEdit!: boolean;
    frontButtonText = 'ADD EXPERIENCE';
    companyPlaceHolder = 'Enter Company Name';
    jobPlaceHolder = 'Enter Job Position';

    saveExperience: Experience = {
        experienceId: 0,
        companyName: '',
        responsibilityList: [],
        startDate: new Date(),
        endDate: new Date(),
        userId: 0,
        resumeId: 0,
        position: '',
    };

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        if (this.forEdit) {
            this.frontButtonText = 'EDIT';

            if (this.experience) {
                this.saveExperience = this.experience;
                this.companyPlaceHolder = this.experience.companyName;
                this.jobPlaceHolder = this.experience.position;
            }
        }
    }

    submitHandler(): void {
        if (this.forEdit) {
            this.submitEditHandler();
        } else {
            this.submitSaveHandler();
        }
    }

    submitSaveHandler(): void {
        const url = environment.domain + environment.saveExperience + 0;
        this.apiService.genericSave(this.saveExperience, url).subscribe({
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
