import { Component, OnInit } from '@angular/core';
import { ClinicaDto } from '../../Dtos/ClinicaDto';
import { ClinicaService } from '../../ClinicaService/clinica-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clinica-list',
  templateUrl: './clinica-listar.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./clinica-listar.css']
})
export class ClinicaListComponent implements OnInit {

  clinicas: ClinicaDto[] = [];
  loading = false;
  error: string | null = null;

  constructor(private clinicaService: ClinicaService) {}

  ngOnInit(): void {
    this.cargarClinicas();
  }

  cargarClinicas(): void {
    this.loading = true;
    this.error = null;

    this.clinicaService.list().subscribe({
      next: (data) => {
        this.clinicas = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar las clínicas.';
        this.loading = false;
      }
    });
  }
}
