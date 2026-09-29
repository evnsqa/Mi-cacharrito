import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavAdminComponente } from './nav-admin-componente';

describe('NavAdminComponente', () => {
  let component: NavAdminComponente;
  let fixture: ComponentFixture<NavAdminComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavAdminComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(NavAdminComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
