import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { environment } from '../../../environments/environment';
import { Resume } from '../../models/Resume';

@Component({
    selector: 'app-resume-section',
    standalone: true,
    imports: [],
    templateUrl: './resume-section.component.html',
    styleUrl: './resume-section.component.scss',
})
export class ResumeSectionComponent {
    @Input() resumeList!: Resume[];
    constructor(private apiService: ApiService) {}

    submitSaveHandler(): void {
        const url = environment.domain + environment.saveResume;
        this.apiService.genericSave(null, url).subscribe({
            next: (v) => console.log(v.data),
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }
}
