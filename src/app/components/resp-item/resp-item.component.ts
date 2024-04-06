import { Component, Input } from '@angular/core';
import { Responsibility } from '../../models/Experience';
import { RespEditFormComponent } from '../resp-edit-form/resp-edit-form.component';
import { NgIf } from '@angular/common';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'app-resp-item',
    standalone: true,
    imports: [RespEditFormComponent, NgIf],
    templateUrl: './resp-item.component.html',
    styleUrl: './resp-item.component.scss',
})
export class RespItemComponent {
    constructor(private apiService: ApiService) {}
    @Input()
    responsibility!: Responsibility;
    @Input() experienceId!: number;

    showEditForm = false;

    toggleShowEditForm($event: any) {
        this.showEditForm = !this.showEditForm;
    }
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
