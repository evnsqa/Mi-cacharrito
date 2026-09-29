import { Component, OnInit, ChangeDetectorRef, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehiculo } from '../entidades/vehiculo';
import { VehiculoServicio } from '../servicios/vehiculo-servicio';
import { EnviarDatoServicio } from '../servicios/enviar-dato-servicio';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  imports: [CommonModule],
  selector: 'app-vehiculo-componente',
  styleUrl: './vehiculo-componente.css',
  templateUrl: './vehiculo-componente.html',
})
export class VehiculoComponente implements OnInit {
  listaVehiculos = signal<Vehiculo[]>([]);
  vehiculoSeleccionado: Vehiculo | null = null;

  private dataService = inject(EnviarDatoServicio);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tipoVehiculo = params.get('tipo');
      if (tipoVehiculo) {
        this.cargarVehiculosPorTipo(tipoVehiculo);
      }
    });
  }

  constructor(private servicioVehiculo: VehiculoServicio, private cdr: ChangeDetectorRef) { }

  cargarVehiculosPorTipo(tipo: string) {
    this.servicioVehiculo.listarVehiculo().subscribe({
      next: (dato) => {
        console.log(`Catálogo completo recibido. Filtrando por: ${tipo}`);

        const filtrados = dato.filter((v: any) =>
          v.tipoVehiculo?.nombre?.trim().toLowerCase() === tipo.trim().toLowerCase()
        );

        this.listaVehiculos.set(filtrados);
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al cargar el listado de vehículos:', err);
      }
    });
  }

  explorarVehiculo(v: Vehiculo) {
    this.vehiculoSeleccionado = v;
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
    this.vehiculoSeleccionado = null;
  }

  enviarSeleccionado(v: Vehiculo) {
    console.log(v);
    this.dataService.enviar(v);
    alert(`Vehiculo "${v.nombre}" seleccionado correctamente.`);
    this.cerrarModal();
    this.router.navigate(['/AlquilerComponente']);
  }
}