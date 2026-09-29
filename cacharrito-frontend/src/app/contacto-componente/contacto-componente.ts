import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-contacto-componente',
  styleUrl: './contacto-componente.css',
  templateUrl: './contacto-componente.html',
})
export class ContactoComponente {

  datosContacto = {
    nombre: '',
    telefono: '',
    mensaje: ''
  };

  enviarMensaje(){
    if(!this.datosContacto.nombre || !this.datosContacto.telefono || !this.datosContacto.mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
  }
  console.log("Mensaje enviado:", this.datosContacto);
    alert("¡Gracias por contactarnos, " + this.datosContacto.nombre + "! Nos comunicaremos pronto.");
    this.limpiarFormulario();
}

  limpiarFormulario(){
    this.datosContacto = {
      nombre: '',
      telefono: '',
      mensaje: ''
    };
  }
}
