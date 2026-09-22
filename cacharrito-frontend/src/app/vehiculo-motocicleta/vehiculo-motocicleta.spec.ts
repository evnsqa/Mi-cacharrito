import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoMotocicleta } from './vehiculo-motocicleta';

describe('VehiculoMotocicleta', () => {
  let component: VehiculoMotocicleta;
  let fixture: ComponentFixture<VehiculoMotocicleta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoMotocicleta],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoMotocicleta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
