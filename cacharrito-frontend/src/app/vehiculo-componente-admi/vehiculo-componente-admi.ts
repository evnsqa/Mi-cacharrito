import { Component, OnInit, ChangeDetectorRef, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { EnviarDatoServicio } from '../servicios/enviar-dato-servicio';
import { Vehiculo } from '../entidades/vehiculo';
import { TipoVehiculo } from '../entidades/tipo-vehiculo';
import { VehiculoServicio } from '../servicios/vehiculo-servicio';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-vehiculo-componente-admi',
  styleUrl: './vehiculo-componente-admi.css',
  templateUrl: './vehiculo-componente-admi.html',
})
export class VehiculoComponenteAdmi implements OnInit {

  listaV = signal<Vehiculo[]>([]);
  tipoVehiculos: TipoVehiculo[] = [];
  bandera: boolean = false;
  placaV: string = '';
  nombreV: string = '';
  tipoVehiculoV: any = null;
  precioV: number | null = null;
  estadoV: string = '';
  busqueda: string = ''; 

  ngOnInit(): void {
    this.listarVehiculos();
    this.cargarImagen;
  }

  vehiculo: Vehiculo = new Vehiculo;
  constructor(private servicioVehiculo: VehiculoServicio, private cdr: ChangeDetectorRef) { }


  abrirModal() {
    const modal = document.getElementById("registro")
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  cerrarModal() {
    this.vehiculo = new Vehiculo;
    this.bandera = false;
    this.placaV = '';
    const modal = document.getElementById("registro")
    if (modal != null) {
      modal.style.display = 'none';
    }
  }

  eliminar(placa: string) {
    const confirmar = confirm(`Estas seguro de eliminar el vehiculo: ${placa}?`)

    if (confirmar) {
      this.servicioVehiculo.eliminarVehiculo(placa).subscribe(dato => {
        console.log(dato)
        this.listarVehiculos()
        alert('Vehiculo eliminado correctamente.')
      })
    }
  }


  guardarVehiculo() {

    this.servicioVehiculo.guardarVehiculo(this.vehiculo).subscribe(dato => {
      console.log(dato)
      this.cerrarModal()
      this.listarVehiculos();
    })

  }

  actualizar(v: Vehiculo) {
    this.bandera = true;
    this.placaV = v.placa;
    this.vehiculo = { ...v };
    this.abrirModal();
  }

  listarVehiculos() {
    this.servicioVehiculo.listarVehiculos().subscribe(dato => {
      this.listaV.set(dato);
      console.log(dato);
      this.cdr.markForCheck();
    });
  }


  paginaActual = signal(1);
  itemsPorPagina = 10;


  datosPaginados = computed(() => {
    const inicio = (this.paginaActual() - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    return this.listaV().slice(inicio, fin);
  });

  totalPaginas = computed(() =>
    Math.ceil(this.listaV().length / this.itemsPorPagina));

  cambiarPagina(nuevaPagina: number) {
    if (nuevaPagina >= 1 && nuevaPagina <= this.totalPaginas()) {
      this.paginaActual.set(nuevaPagina);
    }
  }


  cargarImagen(event: any) {
    const archivo = event.target.files?.[0];
    
    if (archivo) {
      const lector = new FileReader();
      
      lector.onload = () => {
        // El resultado es la cadena Base64 que Angular asigna al string del modelo
        this.vehiculo.imagen = lector.result as string;
        this.cdr.markForCheck();
      };
      
      lector.readAsDataURL(archivo);
    }
  }

  verPlaca() {
    if (!this.placaV.trim()) {
      this.listarVehiculos();
      return;
    }

    // Usa la variable local 'especialidad' directamente
    this.servicioVehiculo.buscarPlaca(this.placaV.trim()).subscribe({
      next: (dato) => {
        console.log('Placas encontradas:', dato);

        if(dato){
          this.listaV.set([dato]);
        } else{
          alert('No se encontro ningun vehiculo.');
        }

        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al consultar placas:', err);
        alert('No se encontro ningun vehiculo.');
      }
    });
    this.cdr.markForCheck();
  }

  verNombre() {
    if (!this.nombreV.trim()) {
      this.listarVehiculos();
      return;
    }

    // Usa la variable local 'especialidad' directamente
    this.servicioVehiculo.buscarNombre(this.nombreV.trim()).subscribe({
      next: (dato) => {
        console.log('Vehiculos encontrados:', dato);

        if (dato && dato.length > 0) {
          this.listaV.set(dato); 
        } else{
          alert('No se encontro ningun vehiculo.');
        }

        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al consultar vehiculo:', err);
        alert('No se encontro ningun vehiculo.');
      }
    });
    this.cdr.markForCheck();
  }

  verTipoVehiculo() {
    if (!this.tipoVehiculoV || !this.tipoVehiculoV.nombre) {
      return;
    }

    const tipoSeleccionado = this.tipoVehiculoV.nombre.trim().toLowerCase();

    this.servicioVehiculo.listarVehiculos().subscribe(dato => {
      const resultados = dato.filter((v: any) => v.tipoVehiculo?.nombre?.trim().toLowerCase() === tipoSeleccionado);
      
      if (resultados && resultados.length > 0) {
        this.listaV.set(resultados);
      } else {
        alert('No se encontro ningun vehiculo de ese tipo.');
      }
      this.cdr.markForCheck();
    });
  }

  verPrecio() {
    if (this.precioV === null || this.precioV === undefined || this.precioV <= 0) {
      this.listarVehiculos();
      return;
    }

    // Usa la variable local 'especialidad' directamente
    this.servicioVehiculo.buscarPrecio(this.precioV).subscribe({
      next: (dato) => {
        console.log('Vehiculos encontrados:', dato);

        if (dato && dato.length > 0) {
          this.listaV.set(dato); 
        } else{
          alert('No se encontro ningun vehiculo.');
        }

        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al consultar vehiculo:', err);
        alert('No se encontro ningun vehiculo.');
      }
    });
    this.cdr.markForCheck();
  }

  verEstado() {
    if (!this.estadoV.trim()) {
      this.listarVehiculos();
      return;
    }

    // Usa la variable local 'especialidad' directamente
    this.servicioVehiculo.buscarEstado(this.estadoV.trim()).subscribe({
      next: (dato) => {
        console.log('Vehiculos encontrados:', dato);

        if (dato && dato.length > 0) {
          this.listaV.set(dato); 
        } else{
          alert('No se encontro ningun vehiculo.');
        }

        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error al consultar vehiculo:', err);
        alert('No se encontro ningun vehiculo.');
      }
    });
    this.cdr.markForCheck();
  }

}
