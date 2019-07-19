import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { ParqueaderoService } from './parqueadero.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ParqueaderoService', () => {
  let injector: TestBed;
  let service: ParqueaderoService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParqueaderoService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(ParqueaderoService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([ParqueaderoService], (service: ParqueaderoService) => {
    expect(service).toBeTruthy();
    }));
});
