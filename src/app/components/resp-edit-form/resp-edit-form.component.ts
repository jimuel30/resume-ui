import { Component, Input, Output } from '@angular/core';
import { Responsibility } from '../../models/Experience';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api/api.service';

@Component({
    selector: 'app-resp-edit-form',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './resp-edit-form.component.html',
    styleUrl: './resp-edit-form.component.scss',
})
export class RespEditFormComponent {
    @Input()
    responsibility!: Responsibility;
    @Output()
    toggleForm: EventEmitter<any> = new EventEmitter();

    toggleFormHandler(): void {
        this.toggleForm.emit(null);
    }

    constructor(private apiService: ApiService) {}

    submitSaveHandler(): void {
        console.log(this.responsibility);
        const url = environment.domain + environment.saveResponsibility + 0;
        this.apiService.genericSave(this.responsibility, url).subscribe({
            next: (v) => {
                this.responsibility = v.data;
                console.log(v.data);
            },
            error: (e) => console.error(e.error.message),
            complete: () => console.info('complete'),
        });
    }
}
