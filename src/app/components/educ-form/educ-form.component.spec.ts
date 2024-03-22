import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducFormComponent } from './educ-form.component';

describe('EducFormComponent', () => {
  let component: EducFormComponent;
  let fixture: ComponentFixture<EducFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
