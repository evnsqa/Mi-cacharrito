import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoVehiculosComponent } from './tipo-vehiculos';

describe('TipoVehiculos', () => {
  let component: TipoVehiculosComponent;
  let fixture: ComponentFixture<TipoVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoVehiculosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TipoVehiculosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
