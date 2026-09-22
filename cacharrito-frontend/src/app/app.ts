import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegacion } from './navegacion/navegacion';
import { Footer } from './footer/footer';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { VehiculoComponente } from './vehiculo-componente/vehiculo-componente';
import { VehiculoCamioneta } from './vehiculo-camioneta/vehiculo-camioneta';
import { VehiculoMicrobus } from './vehiculo-microbus/vehiculo-microbus';
import { VehiculoCampero } from './vehiculo-campero/vehiculo-campero';
import { VehiculoMotocicleta } from './vehiculo-motocicleta/vehiculo-motocicleta';

@Component({
  imports: [RouterOutlet, Navegacion, Footer, InicioSesion, VehiculoComponente, VehiculoCamioneta, VehiculoMicrobus, VehiculoCampero, VehiculoMotocicleta],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cacharrito-frontend');
}
