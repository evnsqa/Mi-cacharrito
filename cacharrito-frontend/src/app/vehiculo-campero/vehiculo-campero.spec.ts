import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoCampero } from './vehiculo-campero';

describe('VehiculoCampero', () => {
  let component: VehiculoCampero;
  let fixture: ComponentFixture<VehiculoCampero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoCampero],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoCampero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
