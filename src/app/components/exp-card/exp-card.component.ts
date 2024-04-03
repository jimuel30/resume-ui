import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { Experience } from '../../models/Experience';
import exp from 'constants';
import { Responsiblity } from '../../models/Responsiblity';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api/api.service';
import { ExpFormComponent } from '../exp-form/exp-form.component';
import { ResponsibilitySectionComponent } from '../responsibility-section/responsibility-section.component';

@Component({
    selector: 'app-exp-card',
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        NgForOf,
        ExpFormComponent,
        ResponsibilitySectionComponent,
    ],
    templateUrl: './exp-card.component.html',
    styleUrl: './exp-card.component.scss',
})
export class ExpCardComponent {
    @Input() experience!: Experience;

    showForm = false;

    constructor(private apiService: ApiService) {}

    responsibility: Responsiblity = {
        responsibilityId: 0,
        responsibility: '',
        experienceId: 0,
    };

    toggleShowForm(): void {
        this.showForm = !this.showForm;
    }
    submitSaveHandler(): void {
        this.responsibility.experienceId = this.experience.experienceId;
        const url = environment.domain + environment.saveResponsibility + 0;
        this.apiService.genericSave(this.responsibility, url).subscribe({
            next: (v) => {
                this.experience.responsibilityList.push(v.data);
            },
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }

    submitDeleteHandler(): void {
        const url =
            environment.domain +
            environment.deleteExperience +
            this.experience.experienceId;
        this.apiService.genericDelete(url).subscribe({
            next: (v) => console.log(v.data),
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }
}
