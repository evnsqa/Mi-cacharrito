import { Routes } from '@angular/router';
import { InicioComponente } from './inicio-componente/inicio-componente';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { ContactoComponente } from './contacto-componente/contacto-componente';
// import { AlquilerComponente } from './alquiler-componente/alquiler-componente';
// import { TipoVehiculosComponent } from './tipo-vehiculos/tipo-vehiculos';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: "inicio", component: InicioComponente },
    { path: "login", component: InicioSesion },
    { path: "contacto", component: ContactoComponente },
    // { path: "tipos", component: TipoVehiculosComponent},


]