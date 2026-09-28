import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  standalone: true,
  selector: 'app-navegacion',
  styleUrl: './navegacion.css',
  templateUrl: './navegacion.html',
})
export class Navegacion {}
