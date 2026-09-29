import { Component, createPlatform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioServicio } from '../servicios/usuario-servicio';
import { Router } from '@angular/router';
import { Navegacion } from '../navegacion/navegacion';

@Component({
  imports: [FormsModule, Navegacion],
  selector: 'app-inicio-sesion',
  styleUrl: './inicio-sesion.css',
  templateUrl: './inicio-sesion.html',
})
export class InicioSesion {

  usuarioLogin: string = "";
  passwordLogin: string = "";

  constructor(private servicioUsuario: UsuarioServicio, private router: Router){}

  iniciarSesion(){
    this.servicioUsuario.loginUsuario(this.usuarioLogin,this.passwordLogin).subscribe({
      next: (dato) =>{
        console.log(dato)
        localStorage.setItem('usuarioSesion', JSON.stringify(dato));
        this.router.navigate(['/inicio']);
      },
      error: (err) =>{
        alert("error al iniciar: " + err.error)
        console.error(err)
      }
    })
  }

}
