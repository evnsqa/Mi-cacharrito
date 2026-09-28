import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioAdminComponente } from './inicio-admin-componente';

describe('InicioAdminComponente', () => {
  let component: InicioAdminComponente;
  let fixture: ComponentFixture<InicioAdminComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioAdminComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(InicioAdminComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
