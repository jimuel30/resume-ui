import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducSectionComponent } from './educ-section.component';

describe('EducSectionComponent', () => {
  let component: EducSectionComponent;
  let fixture: ComponentFixture<EducSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
