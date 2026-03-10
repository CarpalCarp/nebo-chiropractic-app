import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeHours } from './office-hours';

describe('OfficeHours', () => {
  let component: OfficeHours;
  let fixture: ComponentFixture<OfficeHours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeHours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeHours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
