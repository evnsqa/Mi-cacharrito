import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelarAlquilerComponente } from './cancelar-alquiler-componente';

describe('CancelarAlquilerComponente', () => {
  let component: CancelarAlquilerComponente;
  let fixture: ComponentFixture<CancelarAlquilerComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelarAlquilerComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(CancelarAlquilerComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
