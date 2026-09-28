import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegacion } from './navegacion/navegacion';
import { Footer } from './footer/footer';
import { InicioComponente } from './inicio-componente/inicio-componente';
import { DashboardAdminComponente } from './dashboard-admin-componente/dashboard-admin-componente';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { UsuarioCrudComp } from './usuario-crud-comp/usuario-crud-comp';
import { AlquilerComponente } from './alquiler-componente/alquiler-componente';


@Component({
  imports: [RouterOutlet, Navegacion, Footer, InicioComponente, DashboardAdminComponente, 
    InicioSesion, UsuarioCrudComp, AlquilerComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cacharrito-frontend');
}
