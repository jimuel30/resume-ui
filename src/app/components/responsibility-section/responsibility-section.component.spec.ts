import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilitySectionComponent } from './responsibility-section.component';

describe('ResponsibilitySectionComponent', () => {
  let component: ResponsibilitySectionComponent;
  let fixture: ComponentFixture<ResponsibilitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsibilitySectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsibilitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
