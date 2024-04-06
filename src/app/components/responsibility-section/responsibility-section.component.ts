import { Component, Input, Output } from '@angular/core';
import { Responsibility } from '../../models/Experience';
import { NgForOf, NgIf } from '@angular/common';
import { RespEditFormComponent } from '../resp-edit-form/resp-edit-form.component';
import { RespItemComponent } from '../resp-item/resp-item.component';

@Component({
    selector: 'app-responsibility-section',
    standalone: true,
    imports: [NgForOf, RespEditFormComponent, NgIf, RespItemComponent],
    templateUrl: './responsibility-section.component.html',
    styleUrl: './responsibility-section.component.scss',
})
export class ResponsibilitySectionComponent {
    @Input() responsibilityList!: Responsibility[];
    @Input() experienceId!: number;
}
