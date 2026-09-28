import { Routes } from '@angular/router';
import { InicioComponente } from './inicio-componente/inicio-componente';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { DashboardAdminComponente } from './dashboard-admin-componente/dashboard-admin-componente';

import { EntregaVehiculoComponente } from './entrega-vehiculo-componente/entrega-vehiculo-componente';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: "inicio", component: InicioComponente},
    { path: 'inicio-sesion', component: InicioSesion},
    { path: 'dashboardAdmin', component: DashboardAdminComponente},
    { path: 'EntregarVehiculo', component: EntregaVehiculoComponente}

];
