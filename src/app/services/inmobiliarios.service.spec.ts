import { TestBed } from '@angular/core/testing';

import { InmobiliariosService } from './inmobiliarios.service';

describe('InmobiliariosService', () => {
  let service: InmobiliariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmobiliariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
