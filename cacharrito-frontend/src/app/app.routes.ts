import { Routes } from '@angular/router';
import { InicioComponente } from './inicio-componente/inicio-componente';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { ContactoComponente } from './contacto-componente/contacto-componente';
import { VehiculoComponente } from './vehiculo-componente/vehiculo-componente';
// import { AlquilerComponente } from './alquiler-componente/alquiler-componente';
// import { TipoVehiculosComponent } from './tipo-vehiculos/tipo-vehiculos';
import { DashboardAdminComponente } from './dashboard-admin-componente/dashboard-admin-componente';
import { UsuarioCrudComp } from './usuario-crud-comp/usuario-crud-comp';
// import { AlquilerComponente } from './alquiler-componente/alquiler-componente';
// import { TipoVehiculosComponent } from './tipo-vehiculos/tipo-vehiculos';

import { EntregaVehiculoComponente } from './entrega-vehiculo-componente/entrega-vehiculo-componente';
import { RegistroUsuario } from './registro-usuario/registro-usuario';


export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: "inicio", component: InicioComponente },
    { path: "login", component: InicioSesion },
    { path: "contacto", component: ContactoComponente },
    { path: 'vehiculos-por/:tipo', component: VehiculoComponente },
    // { path: "tipos", component: TipoVehiculosComponent},
    // { path: "tipos", component: TipoVehiculosComponent},
    { path: 'dashboardAdmin', component: DashboardAdminComponente },
    { path: 'EntregarVehiculo', component: EntregaVehiculoComponente },
    { path: "crudUsuario", component: UsuarioCrudComp }

];
