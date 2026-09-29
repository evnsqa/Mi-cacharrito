import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../entidades/vehiculo';

@Injectable({
    providedIn: 'root'
})
export class VehiculoServicio {

    constructor(private httpCliente: HttpClient){}
    private listaV='http://localhost:8080/vehiculo/v/listarTodo/';
    private listaT='http://localhost:8080/tipovehiculo/t/listarTodo/';
    private guardarV='http://localhost:8080/vehiculo/v/guardarVehiculo/';
    private eliminarV='http://localhost:8080/vehiculo/v/eliminarVehiculo/';
    private buscarP='http://localhost:8080/vehiculo/v/buscarPlaca/';   
    private buscarN='http://localhost:8080/vehiculo/v/buscarNom/'; 
    private buscarPr='http://localhost:8080/vehiculo/v/buscarPrecio/'; 
    private buscarE='http://localhost:8080/vehiculo/v/buscarEstado/'; 
    private buscarT='http://localhost:8080/vehiculo/v/buscarPorTipo/';
    private buscarTE='http://localhost:8080/vehiculo/v/buscarPorTipoEstado/';


    listarVehiculo(): Observable<any>{
        return this.httpCliente.get(this.listaV);
    }

    listarTipoVehiculos(): Observable<any>{
        return this.httpCliente.get(this.listaT);
    }


    guardarVehiculo(vehiculo: Vehiculo, placaOriginal: string): Observable<any>{
        return this.httpCliente.post(`${this.guardarV}?placaOriginal=${placaOriginal}`, vehiculo);
    }


    eliminarVehiculo(placa: string) : Observable<any> {
        return this.httpCliente.post(`${this.eliminarV}`,placa);
    }

    buscarPlaca(placa: string): Observable<Vehiculo> {
        return this.httpCliente.post<Vehiculo>(`${this.buscarP}?placa=${placa}`,null);
    }

    buscarNombre(nombre: string): Observable<Vehiculo[]> {
        const params = new HttpParams().set('nombre', nombre);
        return this.httpCliente.post<Vehiculo[]>(this.buscarN, null, { params });
    }

    buscarPrecio(precio: number): Observable<Vehiculo[]> {
        const params = new HttpParams().set('precio', precio);
        return this.httpCliente.post<Vehiculo[]>(this.buscarPr, null, { params });
    }

    buscarEstado(estado: string): Observable<Vehiculo[]> {
        const params = new HttpParams().set('estado', estado);
        return this.httpCliente.post<Vehiculo[]>(this.buscarE, null, { params });
    }

    buscarTipo(nombre: string): Observable<Vehiculo[]> {
        const params = new HttpParams().set('nombre', nombre);
        return this.httpCliente.post<Vehiculo[]>(this.buscarT, null, { params });
    }

    buscarPorTipoEstado(nombreTipo: string): Observable<Vehiculo[]> {
        return this.httpCliente.post<Vehiculo[]>(`${this.buscarTE}?nombreTipo=${nombreTipo}`, null);
    }


}