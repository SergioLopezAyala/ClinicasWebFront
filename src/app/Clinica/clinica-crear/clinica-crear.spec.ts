import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaCrear } from './clinica-crear';

describe('ClinicaCrear', () => {
  let component: ClinicaCrear;
  let fixture: ComponentFixture<ClinicaCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicaCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicaCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
