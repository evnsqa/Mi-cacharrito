import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoMicrobus } from './vehiculo-microbus';

describe('VehiculoMicrobus', () => {
  let component: VehiculoMicrobus;
  let fixture: ComponentFixture<VehiculoMicrobus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoMicrobus],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoMicrobus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
