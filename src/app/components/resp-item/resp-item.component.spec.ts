import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespItemComponent } from './resp-item.component';

describe('RespItemComponent', () => {
  let component: RespItemComponent;
  let fixture: ComponentFixture<RespItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
