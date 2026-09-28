import { Component, OnInit, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehiculo } from '../entidades/vehiculo';
import { VehiculoServicio } from '../servicios/vehiculo-servicio';

@Component({
  // IMPORTANTE: Recuerda agregar CommonModule para dar soporte a directivas e imágenes
  imports: [CommonModule], 
  selector: 'app-vehiculo-motocicleta',
  styleUrl: './vehiculo-motocicleta.css',
  templateUrl: './vehiculo-motocicleta.html',
})
export class VehiculoMotocicleta implements OnInit {

  listaMotos = signal<Vehiculo[]>([]);

  constructor(private servicioVehiculo: VehiculoServicio, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.obtenerCatalogoMotos();
  }

  obtenerCatalogoMotos(): void {
    this.servicioVehiculo.listarVehiculos().subscribe({
      next: (todosLosVehiculos) => {
        console.log('Catálogo completo recibido:', todosLosVehiculos);

        const motocicletasFiltradas = todosLosVehiculos.filter((v: any) => 
          v.tipoVehiculo?.nombre?.trim().toLowerCase() === 'motocicleta'
        );

        this.listaMotos.set(motocicletasFiltradas);
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al cargar el catálogo de motos:', err);
      }
    });
  }

  // Función para cuando el usuario presione el botón de EXPLORAR
  explorarVehiculo(placa: string): void {
    console.log('Explorando el vehículo con placa:', placa);
    // Aquí podrás redirigir a una página de detalles o abrir información extra en el futuro
  }
}
