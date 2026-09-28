import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Alquileres } from '../entidades/alquileres';
import { AlquilerServicio } from '../servicios/alquiler-servicio';

@Component({
  imports: [FormsModule],
  selector: 'app-alquiler',
  styleUrl: './alquiler-componente.css', // Nombre exacto de tu archivo CSS
  templateUrl: './alquiler-componente.html', // Nombre exacto de tu archivo HTML
})
export class AlquilerComponente implements OnInit {

  nuevoAlquiler: Alquileres = new Alquileres();
  
  constructor(
    private alquilerServicio: AlquilerServicio,
    private router: Router
  ){}

  ngOnInit(): void {
    
    const usuarioString = localStorage.getItem('usuarioSesion');
    
    if (usuarioString) {
      this.nuevoAlquiler.usuario = JSON.parse(usuarioString);
    } else {
      alert("Debes iniciar sesión para alquilar un vehículo");
      this.router.navigate(['/']); // Cambia la ruta si tu login es diferente (ej. '/login')
    }
  }

  aceptarAlquiler() {
    this.nuevoAlquiler.valorTotal = 0; 

    this.alquilerServicio.guardarAlquiler(this.nuevoAlquiler).subscribe({
      next: (datoGuardado) => {
        alert("Alquiler registrado con éxito. Estado: Pendiente de entrega");
        console.log("Alquiler guardado: ", datoGuardado);
        
        // =========================================
        // ¡AQUÍ LUEGO LLAMAREMOS LA FUNCIÓN DEL PDF!
        // =========================================
        
      },
      error: (err) => {
        alert("Error al registrar el alquiler");
        console.error(err);
      }
    });
  }
}