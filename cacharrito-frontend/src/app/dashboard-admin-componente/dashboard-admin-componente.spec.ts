import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAdminComponente } from './dashboard-admin-componente';

describe('DashboardAdminComponente', () => {
  let component: DashboardAdminComponente;
  let fixture: ComponentFixture<DashboardAdminComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAdminComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAdminComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
