import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpSectionComponent } from './exp-section.component';

describe('ExpSectionComponent', () => {
  let component: ExpSectionComponent;
  let fixture: ComponentFixture<ExpSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
