import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaListar } from './clinica-listar';

describe('ClinicaListar', () => {
  let component: ClinicaListar;
  let fixture: ComponentFixture<ClinicaListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicaListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicaListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
