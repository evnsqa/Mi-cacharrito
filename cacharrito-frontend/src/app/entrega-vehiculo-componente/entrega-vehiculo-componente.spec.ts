import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntregaVehiculoComponente } from './entrega-vehiculo-componente';

describe('EntregaVehiculoComponente', () => {
  let component: EntregaVehiculoComponente;
  let fixture: ComponentFixture<EntregaVehiculoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregaVehiculoComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(EntregaVehiculoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
