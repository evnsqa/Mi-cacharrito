import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlquilerComponente } from './alquiler-componente';

describe('AlquilerComponente', () => {
  let component: AlquilerComponente;
  let fixture: ComponentFixture<AlquilerComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlquilerComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(AlquilerComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
