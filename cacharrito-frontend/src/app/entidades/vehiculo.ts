import { TipoVehiculo } from "./tipo-vehiculo";

export interface Vehiculo {
    placa:string;
    color:string;
    precio:number;
    estado:string;
    tipoVehiculo:TipoVehiculo;
}
