
export class ClinicaDto {
    constructor(
        public id?: number,
        public nombre?: string,
        public direccion?: string,
        public cantidad_camas?: number,
        public telefono?: string,
        public ciudad?: string,
        public fecha_creacion?: string
    ){

    }
}