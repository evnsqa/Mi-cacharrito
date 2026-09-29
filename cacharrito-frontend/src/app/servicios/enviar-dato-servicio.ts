import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnviarDatoServicio {
    private platformId = inject(PLATFORM_ID);
    public vehiculoSignal = signal<any>(this.obtenerVehiculoInicial());

    private obtenerVehiculoInicial() {

        if (isPlatformBrowser(this.platformId)) {
            const vehiculoGuardado = localStorage.getItem('vehiculoActual');
            return vehiculoGuardado ? JSON.parse(vehiculoGuardado) : null;
        }
        return null;
    }

    enviar(datosVehiculo: any) {
        console.log('Guardando dato:', datosVehiculo);
        this.vehiculoSignal.set(datosVehiculo);
        localStorage.setItem('vehiculoActual', JSON.stringify(datosVehiculo));
    }

    limpiar() {
        this.vehiculoSignal.set(null);
        localStorage.removeItem('vehiculoActual');
    }
}
