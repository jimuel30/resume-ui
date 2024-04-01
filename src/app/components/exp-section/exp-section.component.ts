import { Component, Input, Output } from '@angular/core';
import { ExpFormComponent } from '../exp-form/exp-form.component';
import { Experience } from '../../models/Experience';
import EventEmitter from 'events';
import { ExpCardComponent } from '../exp-card/exp-card.component';
import { NgForOf } from '@angular/common';

@Component({
    selector: 'app-exp-section',
    standalone: true,
    imports: [ExpFormComponent, ExpCardComponent, NgForOf],
    templateUrl: './exp-section.component.html',
    styleUrl: './exp-section.component.scss',
})
export class ExpSectionComponent {
    @Input() experienceList!: Experience[];
    @Output() onSuggest: EventEmitter<any> = new EventEmitter();
}
