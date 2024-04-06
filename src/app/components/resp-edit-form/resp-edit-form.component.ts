import { Component, Input, Output } from '@angular/core';
import { Responsibility } from '../../models/Experience';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

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
}
