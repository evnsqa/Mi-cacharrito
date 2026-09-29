import { Component, OnInit, ChangeDetectorRef, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehiculo } from '../entidades/vehiculo';
import { VehiculoServicio } from '../servicios/vehiculo-servicio';
import { EnviarDatoServicio } from '../servicios/enviar-dato-servicio';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'app-vehiculo-motocicleta',
  styleUrl: './vehiculo-motocicleta.css',
  templateUrl: './vehiculo-motocicleta.html',
})
export class VehiculoMotocicleta implements OnInit {

  listaMotos = signal<Vehiculo[]>([]);
  motoSeleccionada: Vehiculo | null = null;

  private dataService = inject(EnviarDatoServicio);
  private router = inject(Router);

  ngOnInit(): void {
    this.motos();
  }

  constructor(private servicioVehiculo: VehiculoServicio, private cdr: ChangeDetectorRef) { }

  motos() {
    this.servicioVehiculo.listarVehiculo().subscribe({
      next: (dato) => {
        console.log('Motos recibidas:', dato);

        const motosV = dato.filter((v: any) =>
          v.tipoVehiculo?.nombre?.trim().toLowerCase() === 'motocicleta'
        );

        this.listaMotos.set(motosV);
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al cargar el listado de motos:', err);
      }
    });
  }

  explorarVehiculo(v: Vehiculo) {
    this.motoSeleccionada = v;
    this.cdr.markForCheck();
    setTimeout(() => {
      this.abrirModal();
    }, 10);
  }

  abrirModal() {
    const modal = document.getElementById("explorador");
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  cerrarModal() {
    const modal = document.getElementById("explorador");
    if (modal != null) {
      modal.style.display = 'none';
    }
    this.motoSeleccionada = null;
  }

  enviarSeleccionado(v: Vehiculo){
    console.log(v)
    this.dataService.enviar(v);
    alert(`Vehiculo "${v.nombre}" seleccionado correctamente.`);
    this.cerrarModal();
    this.router.navigate(['/AlquilerComponente']);
  }

}
