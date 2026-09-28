import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegacion } from './navegacion/navegacion';
import { Footer } from './footer/footer';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { UsuarioCrudComp } from './usuario-crud-comp/usuario-crud-comp';

@Component({
  imports: [RouterOutlet, Navegacion, Footer, InicioSesion, UsuarioCrudComp],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cacharrito-frontend');
}
