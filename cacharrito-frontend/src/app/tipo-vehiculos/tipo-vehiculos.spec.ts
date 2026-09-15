import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoVehiculos } from './tipo-vehiculos';

describe('TipoVehiculos', () => {
  let component: TipoVehiculos;
  let fixture: ComponentFixture<TipoVehiculos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoVehiculos],
    }).compileComponents();

    fixture = TestBed.createComponent(TipoVehiculos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
