import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactoComponente } from './contacto-componente';

describe('ContactoComponente', () => {
  let component: ContactoComponente;
  let fixture: ComponentFixture<ContactoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoComponente],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoComponente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
