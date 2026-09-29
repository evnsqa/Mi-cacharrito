import { TestBed } from '@angular/core/testing';
import { AdminServicio } from './admin-servicio';

describe('AdminServicio', () => {
  let service: AdminServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
