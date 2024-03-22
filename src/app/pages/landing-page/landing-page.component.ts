import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
    @ViewChild('typingText', { static: false }) typingTextElement!: ElementRef;

    textToType = 'RESUME.ai';
    index = 0;

    ngAfterViewInit() {
        this.typeText();
    }

    typeText() {
        const textElement = this.typingTextElement.nativeElement;
        textElement.textContent = this.textToType.slice(0, this.index++);
        if (this.index <= this.textToType.length) {
            setTimeout(() => this.typeText(), 150); // Adjust typing speed (milliseconds)
        }
    }
}
