import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  imports: [RouterLink, Navegacion],
  selector: 'app-inicio-componente',
  styleUrl: './inicio-componente.css',
  templateUrl: './inicio-componente.html',
})
export class InicioComponente {}
