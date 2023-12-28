import { TestBed } from '@angular/core/testing';

import { MovieAppServiceService } from './movie-app-service.service';

describe('MovieAppServiceService', () => {
  let service: MovieAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
