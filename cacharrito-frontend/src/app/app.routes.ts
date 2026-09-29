import { Routes } from '@angular/router';
import { InicioSesion } from './inicio-sesion/inicio-sesion';
import { ContactoComponente } from './contacto-componente/contacto-componente';
import { CatalogoComponent } from './catalogo/catalogo';
import { TipoVehiculosComponent } from './tipo-vehiculos/tipo-vehiculos';
import { NoticiasComponent } from './noticias/noticias';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "login", component: InicioSesion},
    { path: "contacto", component: ContactoComponente},
    { path: "tipos", component: TipoVehiculosComponent},
    { path: "catalogo", component: CatalogoComponent},
    { path: "noticias", component: NoticiasComponent}
];
