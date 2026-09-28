import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UsuarioServicio } from '../servicios/usuario-servicio';
import { Usuario } from '../entidades/usuario';

@Component({
  imports: [],
  selector: 'app-usuario-crud-comp',
  styleUrl: './usuario-crud-comp.css',
  templateUrl: './usuario-crud-comp.html',
})

export class UsuarioCrudComp implements OnInit {

  ngOnInit(): void {
    this.mostrarUsuarios()
  }
  constructor(private servicioUsuario: UsuarioServicio, private cdr: ChangeDetectorRef){}

  listaU: Usuario[] = []
  busqueda: string = "";
  idU: string = "";

  mostrarUsuarios(){
    this.servicioUsuario.listarUsusarios().subscribe(dato =>{
      console.log(dato)
      this.cdr.markForCheck();
      this.listaU = dato;
    })
  }

  
}
