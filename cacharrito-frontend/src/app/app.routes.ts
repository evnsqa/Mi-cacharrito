import { Routes } from '@angular/router';
import { InicioComponente } from './inicio-componente/inicio-componente';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { DashboardAdminComponente } from './dashboard-admin-componente/dashboard-admin-componente';
import { ContactoComponente } from './contacto-componente/contacto-componente';
import { RegistroUsuario } from './registro-usuario/registro-usuario';
import { AdministradorComponente } from './administrador-componente/administrador-componente';
import { UsuarioCrudComp } from './usuario-crud-comp/usuario-crud-comp';
import { AlquilerComponente } from './alquiler-componente/alquiler-componente';
// import { TipoVehiculosComponent } from './tipo-vehiculos/tipo-vehiculos';
import { EntregarVehiculoComponente } from './entrega-vehiculo-componente/entrega-vehiculo-componente';


export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: "inicio", component: InicioComponente},
    { path: "login", component: InicioSesion},
    { path: "registro", component: RegistroUsuario},
    { path: "contacto", component: ContactoComponente},
    { path: "ADMINISTRADOR", component: AdministradorComponente},
    // { path: "tipos", component: TipoVehiculosComponent},
    { path: 'dashboardAdmin', component: DashboardAdminComponente},
    { path: 'EntregarVehiculo', component: EntregarVehiculoComponente},
    {path: "crudUsuario", component: UsuarioCrudComp}

];
