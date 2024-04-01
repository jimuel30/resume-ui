import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { Skill } from '../../models/Skill';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'app-skills-section',
    standalone: true,
    imports: [FormsModule, NgIf, NgForOf, NgOptimizedImage],
    templateUrl: './skills-section.component.html',
    styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent {
    forSaving = false;
    forAiHelping = false;

    constructor(private apiService: ApiService) {}

    @Input() skillList!: Skill[];

    saveSkill: Skill = {
        skillId: 0,
        skillName: '',
        resumeId: 0,
        userId: 0,
    };

    toggleForSaving(): void {
        this.forSaving = !this.forSaving;
    }
    toggleForAiHelping(): void {
        this.forAiHelping = !this.forAiHelping;
    }

    submitSaveHandler(): void {
        const url = environment.domain + environment.saveSkill + 0;
        this.apiService.genericSave(this.saveSkill, url).subscribe({
            next: (v) => this.skillList.push(v.data),
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }
}
