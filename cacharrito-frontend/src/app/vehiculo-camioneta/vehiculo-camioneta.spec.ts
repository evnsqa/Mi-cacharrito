import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoCamioneta } from './vehiculo-camioneta';

describe('VehiculoCamioneta', () => {
  let component: VehiculoCamioneta;
  let fixture: ComponentFixture<VehiculoCamioneta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoCamioneta],
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoCamioneta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
