import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { Resume } from '../../models/Resume';

@Component({
    selector: 'app-resume-page',
    standalone: true,
    imports: [],
    templateUrl: './resume-page.component.html',
    styleUrl: './resume-page.component.scss',
})
export class ResumePageComponent implements OnInit {
    ngOnInit(): void {
        this.getResumeById();
    }

    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute
    ) {}
    resumeId!: string;

    resume!: Resume;

    getResumeById(): void {
        this.resumeId = this.route.snapshot.paramMap.get('resumeId')!;
        const url =
            environment.domain + environment.getResumeById + this.resumeId;
        this.apiService.genericGet(url).subscribe({
            next: (v) => (this.resume = v.data),
            error: (e) => console.error(e),
            complete: () => console.info('complete'),
        });
    }

    downloadResume(): void {
        const element = document.getElementById('my-resume');
    }
}
