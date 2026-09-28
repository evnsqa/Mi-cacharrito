import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Alquileres } from '../entidades/alquileres';
import { AlquilerServicio } from '../servicios/alquiler-servicio';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  imports: [FormsModule, Navegacion],
  selector: 'app-alquiler',
  styleUrl: './alquiler-componente.css',
  templateUrl: './alquiler-componente.html', 
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
      
        this.generarPDF(datoGuardado);
      },
      error: (err) => {
        alert("Error al registrar el alquiler");
        console.error(err);
      }
    });
  }

  generarPDF(alquilerGuardado: any) {
  
    const elemento = document.getElementById('pantalla-imprimir');

    if (elemento) {
      html2canvas(elemento, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfAncho = pdf.internal.pageSize.getWidth();
        const pdfAlto = (canvas.height * pdfAncho) / canvas.width; 

        pdf.addImage(imgData, 'PNG', 0, 0, pdfAncho, pdfAlto);
        const numeroDoc = alquilerGuardado.numeroAlquiler || 'Reciente';
        pdf.save(`Comprobante_Alquiler_${numeroDoc}.pdf`);
      });
    }
  }
}