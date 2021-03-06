import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InverterComponent } from './inverter.component';

describe('InverterComponent', () => {
  let component: InverterComponent;
  let fixture: ComponentFixture<InverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
