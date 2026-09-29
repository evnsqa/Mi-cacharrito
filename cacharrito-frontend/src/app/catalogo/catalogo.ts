import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiciosTipoVehiculo } from '../servicios/servicios-tipo-vehiculo';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit {

  listaTipos: any[] = [];

  constructor(
    private servicio: ServiciosTipoVehiculo, 
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    
    this.servicio.listarTodos().subscribe({
      next: (datos: any) => {
        this.listaTipos = datos;
        this.cdr.detectChanges();
      },
      error: (err) => {
        alert("Atención: El servidor de Java (Eclipse) está apagado o desconectado.");
      }
    });
  }

  irAVehiculos(tipo: any) {
   this.router.navigate(['/vehiculoComponente']);
  }
}