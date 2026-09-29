import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioCrudComp } from './usuario-crud-comp';

describe('UsuarioCrudComp', () => {
  let component: UsuarioCrudComp;
  let fixture: ComponentFixture<UsuarioCrudComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioCrudComp],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioCrudComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
