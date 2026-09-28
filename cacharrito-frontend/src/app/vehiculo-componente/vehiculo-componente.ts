import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehiculo } from '../entidades/vehiculo';
import { VehiculoServicio } from '../servicios/vehiculo-servicio';

@Component({
  imports: [CommonModule],
  selector: 'app-vehiculo-componente',
  styleUrl: './vehiculo-componente.css',
  templateUrl: './vehiculo-componente.html',
})
export class VehiculoComponente implements OnInit {

  vehiculos: Vehiculo[] = [];
  vehiculoSeleccionado: Vehiculo | null = null;
  Bandera: boolean = false;
  carrito: Vehiculo[] = [];

  constructor(private servicioVehiculo: VehiculoServicio) { }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  obtenerVehiculos(): void {
    this.servicioVehiculo.listarVehiculos().subscribe({
      next: (datos) => {
        this.vehiculos = datos;
      },
      error: (err) => {
        console.error('Error al obtener los vehículos de la base de datos:', err);
      }
    });
  }

  seleccionarVehiculo(vehiculo: Vehiculo) {
    this.vehiculoSeleccionado = vehiculo;
    this.Bandera = (vehiculo.estado === 'Disponible');
  }

  agregarCarrito(vehiculo: Vehiculo) {
    if (!this.estaEnCarrito(vehiculo.placa)) {
      this.carrito.push(vehiculo);
    }
  }

  quitarCarrito(placa: string) {
    this.carrito = this.carrito.filter(dato => dato.placa !== placa);
  }

  estaEnCarrito(placa: string) {
    return this.carrito.some(dato => dato.placa === placa);
  }

  confirmarAlquiler() {
    this.carrito.forEach(vehiculo => {
      vehiculo.estado = 'No Disponible';
      this.servicioVehiculo.guardarVehiculo(vehiculo).subscribe({
        next: (respuesta) => {
          console.log(`Vehículo ${vehiculo.placa} actualizado en MySQL:`, respuesta);
        },
        error: (error) => console.error('Error al guardar alquiler:', error)
      });
    });

    alert('¡Tu alquiler ha sido confirmado exitosamente!');
    this.carrito = [];
    this.obtenerVehiculos();
  }
}