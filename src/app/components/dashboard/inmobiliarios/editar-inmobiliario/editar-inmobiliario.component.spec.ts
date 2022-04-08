import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInmobiliarioComponent } from './editar-inmobiliario.component';

describe('EditarInmobiliarioComponent', () => {
  let component: EditarInmobiliarioComponent;
  let fixture: ComponentFixture<EditarInmobiliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInmobiliarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInmobiliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
