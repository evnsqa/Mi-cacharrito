import { Routes } from '@angular/router';
import { InicioComponente } from './inicio-componente/inicio-componente';
export const routes: Routes = 
  [{ path: '', redirectTo: '', pathMatch: 'full' },
    { path: "inicio", component: InicioComponente},]
