import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navegacion } from './navegacion/navegacion';
import { Footer } from './footer/footer';
import { InicioSesion } from './inicio-sesion/inicio-sesion';

@Component({
  imports: [RouterOutlet, Navegacion, Footer, InicioSesion],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cacharrito-frontend');
}
