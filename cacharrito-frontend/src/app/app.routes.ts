import { Routes } from '@angular/router';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { RegistroUsuario } from './registro-usuario/registro-usuario';
import { ContactoComponente } from './contacto-componente/contacto-componente';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "login", component: InicioSesion},
    { path: "registro", component: RegistroUsuario},
    { path: "contacto", component: ContactoComponente},
   
];
