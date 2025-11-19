import { Component } from '@angular/core';
import { ClinicaService } from '../../ClinicaService/clinica-service';
import { ClinicaDto } from '../../Dtos/ClinicaDto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ClinicaForm {
  nombre: string;
  direccion: string;
  cantidad_camas: number | null;
  telefono: string;
  ciudad: string;
  fecha_creacion: string; // 'YYYY-MM-DD' desde <input type="date">
}

@Component({
  selector: 'app-clinica-create',
  imports:[CommonModule,FormsModule],
  templateUrl: './clinica-crear.html',
  styleUrls: ['./clinica-crear.css']
})
export class ClinicaCreateComponent {

  form: ClinicaForm = {
    nombre: '',
    direccion: '',
    cantidad_camas: null,
    telefono: '',
    ciudad: '',
    fecha_creacion: ''
  };

  loading = false;
  error: string | null = null;
  success: string | null = null;

  constructor(private clinicaService: ClinicaService) {}

  crearClinica(): void {
    this.error = null;
    this.success = null;

    // Validación básica
    if (!this.form.nombre || !this.form.direccion || !this.form.ciudad) {
      this.error = 'Nombre, dirección y ciudad son obligatorios.';
      return;
    }

    const payload: ClinicaDto = {
      nombre: this.form.nombre.trim(),
      direccion: this.form.direccion.trim(),
      cantidad_camas: Number(this.form.cantidad_camas ?? 0),
      telefono: this.form.telefono.trim(),
      ciudad: this.form.ciudad.trim(),
      fecha_creacion: this.form.fecha_creacion // el backend lo recibe como Date
    };

    this.loading = true;

    this.clinicaService.create(payload).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Clínica creada correctamente.';
        // limpiar form
        this.form = {
          nombre: '',
          direccion: '',
          cantidad_camas: null,
          telefono: '',
          ciudad: '',
          fecha_creacion: ''
        };
      },
      error: () => {
        this.loading = false;
        this.error = 'Error al crear la clínica.';
      }
    });
  }
}
