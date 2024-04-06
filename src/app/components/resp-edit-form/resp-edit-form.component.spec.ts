import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespEditFormComponent } from './resp-edit-form.component';

describe('RespEditFormComponent', () => {
  let component: RespEditFormComponent;
  let fixture: ComponentFixture<RespEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespEditFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
