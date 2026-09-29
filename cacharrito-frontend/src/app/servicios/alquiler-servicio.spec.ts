import { TestBed } from '@angular/core/testing';
import { AlquilerServicio } from './alquiler-servicio';

describe('ServiciosAlquiler', () => {
  let service: AlquilerServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlquilerServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
