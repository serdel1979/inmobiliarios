import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiliariosComponent } from './inmobiliarios.component';

describe('InmobiliariosComponent', () => {
  let component: InmobiliariosComponent;
  let fixture: ComponentFixture<InmobiliariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmobiliariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InmobiliariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
