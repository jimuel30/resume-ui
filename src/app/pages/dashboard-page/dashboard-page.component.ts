import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';
import { ResumeSectionComponent } from '../../components/resume-section/resume-section.component';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section.component';
import { ExpSectionComponent } from '../../components/exp-section/exp-section.component';
import { EducSectionComponent } from '../../components/educ-section/educ-section.component';
import { SocialSectionComponent } from '../../components/social-section/social-section.component';
import { ApiService } from '../../services/api/api.service';
import { UserList } from '../../models/UserList';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-dashboard-page',
    standalone: true,
    imports: [
        NgIf,
        ResumeSectionComponent,
        SkillsSectionComponent,
        ExpSectionComponent,
        EducSectionComponent,
        SocialSectionComponent,
    ],
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.scss',
    encapsulation: ViewEncapsulation.None, // Add this line
})
export class DashboardPageComponent implements OnInit {
    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.getUserListHandler();
    }

    userList!: UserList;

    getUserListHandler(): void {
        const url = environment.domain + environment.getUserList;
        this.apiService.genericGet(url).subscribe({
            next: (v) => console.log(v.data),
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
        //this.userList = v.data
    }
}
