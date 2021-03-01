import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusedIconComponent } from './focused-icon.component';

describe('FocusedIconComponent', () => {
  let component: FocusedIconComponent;
  let fixture: ComponentFixture<FocusedIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusedIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
