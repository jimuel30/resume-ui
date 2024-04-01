import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducCardComponent } from './educ-card.component';

describe('EducCardComponent', () => {
  let component: EducCardComponent;
  let fixture: ComponentFixture<EducCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
