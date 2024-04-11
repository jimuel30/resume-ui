import { Component, Input } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { ApiService } from '../../services/api/api.service';
import { environment } from '../../../environments/environment';
import { Social } from '../../models/Social';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-social-section',
    standalone: true,
    imports: [NgIf, FormsModule, NgForOf],
    templateUrl: './social-section.component.html',
    styleUrl: './social-section.component.scss',
})
export class SocialSectionComponent {
    forSaving = false;
    @Input() socialList!: Social[];

    saveSocial: Social = {
        socialId: 0,
        socialLink: '',
        userId: 0,
        resumeId: 0,
        socialName: '',
    };

    toggleForSaving(): void {
        this.forSaving = !this.forSaving;
    }

    constructor(private apiService: ApiService) {}

    submitSaveHandler(): void {
        const url = environment.domain + environment.saveSocial + 0;
        this.apiService.genericSave(this.saveSocial, url).subscribe({
            next: (v) => {
                this.socialList.push(v.data);

            },
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }
    submitDeleteHandler(socialId: number): void {
        const url = environment.domain + environment.deleteSocial + socialId;
        this.apiService.genericDelete(url).subscribe({
            next: (v) => console.log(v.data),
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }
}
