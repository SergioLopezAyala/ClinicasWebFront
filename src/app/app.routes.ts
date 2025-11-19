import { Routes } from '@angular/router';
import { ClinicaListComponent } from './Clinica/clinica-listar/clinica-listar';
import { ClinicaCreateComponent } from './Clinica/clinica-crear/clinica-crear';

export const routes: Routes = [
  {
    path: '',
    component: ClinicaListComponent,
    pathMatch: 'full'
  },
  {
    path: 'crear',
    component: ClinicaCreateComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
