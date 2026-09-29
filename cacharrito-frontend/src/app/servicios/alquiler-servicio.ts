import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alquileres } from '../entidades/alquileres';

@Injectable({
    providedIn: 'root'
})
export class AlquilerServicio {
    
    constructor(private httpCliente: HttpClient) {}


    private guardarA = "http://localhost:8080/alquileres/guardarAlquiler/"
    private cancelarA = "http://localhost:8080/alquileres/cancelarAlquiler/"
    private listarP = "http://localhost:8080/alquileres/listarPendientes/"
    private entregarV = "http://localhost:8080/alquileres/entregarVehiculo/"
    private devolverV = "http://localhost:8080/alquileres/devolverVehiculo/"


    guardarAlquiler(alquiler: Alquileres): Observable<any>{
        return this.httpCliente.post(`${this.guardarA}`, alquiler)
    }

    cancelarAlquiler(id: number): Observable<any>{
        const params = new HttpParams().set("id", id)
        return this.httpCliente.post(`${this.cancelarA}`, null, {params: params})
    }

    listarPendientes(): Observable<any>{
        return this.httpCliente.get(`${this.listarP}`)
    }

    entregarVehiculo(placa: string): Observable<any>{
        const params = new HttpParams().set("placa", placa)
        return this.httpCliente.post(`${this.entregarV}`, null, {params: params})
    }

    devolverVehiculo(id: number, valorExtra: number): Observable<any>{
        const params = new HttpParams().set("id", id).set("valorExtra", valorExtra)
        return this.httpCliente.post(`${this.devolverV}`, null, {params: params})
    }
}