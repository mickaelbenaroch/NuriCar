import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingLightsComponent } from './missing-lights.component';

describe('MissingLightsComponent', () => {
  let component: MissingLightsComponent;
  let fixture: ComponentFixture<MissingLightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingLightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingLightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
