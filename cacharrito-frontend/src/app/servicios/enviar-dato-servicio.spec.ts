import { TestBed } from '@angular/core/testing';
import { EnviarDatoServicio } from './enviar-dato-servicio';

describe('EnviarDatoServicio', () => {
  let service: EnviarDatoServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviarDatoServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
