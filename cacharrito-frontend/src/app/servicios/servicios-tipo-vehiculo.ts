import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoVehiculo } from '../entidades/tipo-vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ServiciosTipoVehiculo {

  
  private apiUrl = 'http://localhost:8080/tipovehiculo';
  private apiLista = 'http://localhost:8080/tipovehiculo/t/listarTodo/';
  private apiGuardar = 'http://localhost:8080/tipovehiculo/t/guardarTipoVehiculo/';
  private apiModificar = 'http://localhost:8080/tipovehiculo/t/modificarTipoVehiculo/';
  private apiEliminar = 'http://localhost:8080/tipovehiculo/t/eliminarTipoVehiculo/';
  private apiNombre = 'http://localhost:8080/tipovehiculo/t/buscarNom/';


  constructor(private http: HttpClient) {}

  
  listarTodos(): Observable<any> {
    return this.http.get(`${this.apiLista}`);
  }

  
  guardar(tipoVehiculo: TipoVehiculo): Observable<any> {
    return this.http.post(`${this.apiGuardar}`, tipoVehiculo);
  }

  
  modificar(tipoVehiculo: TipoVehiculo): Observable<any> {
    return this.http.post(`${this.apiModificar}`, tipoVehiculo);
  }

  
  eliminar(id: number): Observable<any> {
    return this.http.post(`${this.apiEliminar}`, id);
  }

  buscarPorNombre(nombre: string): Observable<any> {
    const parametros = new HttpParams().set('nombre', nombre);
    return this.http.post(`${this.apiNombre}`, null, {params:parametros});
  }
}