import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpFormComponent } from './exp-form.component';

describe('ExpFormComponent', () => {
  let component: ExpFormComponent;
  let fixture: ComponentFixture<ExpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
