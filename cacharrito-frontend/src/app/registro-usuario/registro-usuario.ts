import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../entidades/usuario';
import { UsuarioServicio } from '../servicios/usuario-servicio';

@Component({
  imports: [FormsModule],
  selector: 'app-registro-usuario',
  styleUrl: './registro-usuario.css',
  templateUrl: './registro-usuario.html',
})
export class RegistroUsuario {

  constructor(private servicioUsuario: UsuarioServicio){}
  usuarioNuevo: Usuario = new Usuario;

  registrar() {
    this.servicioUsuario.registroUsuario(this.usuarioNuevo).subscribe({
      next: (dato) => {
        console.log(dato);
        alert("Registro exitoso");
        
      },
      error: (err) => {
        alert("Error al registrar: " + err.error);
        console.error(err);
      }
    });
  }

}
