import { Component, Input } from '@angular/core';
import { Responsibility } from '../../models/Experience';
import { NgForOf } from '@angular/common';
import { ApiService } from '../../services/api/api.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-responsibility-section',
    standalone: true,
    imports: [NgForOf],
    templateUrl: './responsibility-section.component.html',
    styleUrl: './responsibility-section.component.scss',
})
export class ResponsibilitySectionComponent {
    @Input() responsibilityList!: Responsibility[];
    @Input() experienceId!: number;

    constructor(private apiService: ApiService) {}

    submitDeleteHandler(responsibilityId: number): void {
        const url =
            environment.domain +
            environment.deleteResponsibility +
            'experienceId=' +
            this.experienceId +
            '&responsibilityId=' +
            responsibilityId;
        this.apiService.genericDelete(url).subscribe({
            next: (v) => console.log(v.data),
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }
}
