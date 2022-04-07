import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearInmobiliarioComponent } from './crear-inmobiliario.component';

describe('CrearInmobiliarioComponent', () => {
  let component: CrearInmobiliarioComponent;
  let fixture: ComponentFixture<CrearInmobiliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearInmobiliarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearInmobiliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
