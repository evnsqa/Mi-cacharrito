import { Routes } from '@angular/router';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { ContactoComponente } from './contacto-componente/contacto-componente';
import { AlquilerComponente } from './alquiler-componente/alquiler-componente';
import { TipoVehiculosComponent } from './tipo-vehiculos/tipo-vehiculos';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "login", component: InicioSesion},
    { path: "contacto", component: ContactoComponente},
    { path: "alquiler", component: AlquilerComponente},
    { path: "tipos", component: TipoVehiculosComponent}
];
