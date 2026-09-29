import { TestBed } from '@angular/core/testing';
import { ServiciosTipoVehiculo } from './servicios-tipo-vehiculo';

describe('ServiciosTipoVehiculo', () => {
  let service: ServiciosTipoVehiculo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosTipoVehiculo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
