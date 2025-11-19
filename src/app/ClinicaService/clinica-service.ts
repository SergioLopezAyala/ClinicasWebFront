import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClinicaDto } from '../Dtos/ClinicaDto';

@Injectable({ providedIn: 'root' })
export class ClinicaService {
  base: string = 'http://localhost:8080/api/clinicas';

  constructor(private httpClient: HttpClient) {}

  /** GET /api/clinicas */
  list(): Observable<ClinicaDto[]> {
    return this.httpClient.get<ClinicaDto[]>(this.base);
  }

  /** GET /api/clinicas/{id} */
  get(id: number): Observable<ClinicaDto> {
    return this.httpClient.get<ClinicaDto>(`${this.base}/${id}`);
  }

  /** POST /api/clinicas */
  create(dto: ClinicaDto): Observable<ClinicaDto> {
    return this.httpClient.post<ClinicaDto>(this.base, dto);
  }

  /** PUT /api/clinicas/{id} */
  update(id: number, dto: ClinicaDto): Observable<ClinicaDto> {
    return this.httpClient.put<ClinicaDto>(`${this.base}/${id}`, dto);
  }

  /** DELETE /api/clinicas/{id} */
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.base}/${id}`);
  }
}
