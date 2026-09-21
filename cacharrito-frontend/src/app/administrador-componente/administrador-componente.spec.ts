import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministradorComponente } from './administrador-componente';

describe('AdministradorComponente', () => {
  let component: AdministradorComponente;
  let fixture: ComponentFixture<AdministradorComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(AdministradorComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
