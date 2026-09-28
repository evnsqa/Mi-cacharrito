import { Routes } from '@angular/router';
import { InicioSesion } from './inicio-sesion/inicio-sesion';

export const routes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "login", component: InicioSesion },
];
