import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoComponenteAdmi } from './vehiculo-componente-admi';

describe('VehiculoComponenteAdmi', () => {
  let component: VehiculoComponenteAdmi;
  let fixture: ComponentFixture<VehiculoComponenteAdmi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoComponenteAdmi],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoComponenteAdmi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
