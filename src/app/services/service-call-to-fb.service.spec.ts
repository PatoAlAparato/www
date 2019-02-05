import { TestBed } from '@angular/core/testing';

import { ServiceCallToFbService } from './service-call-to-fb.service';

describe('ServiceCallToFbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCallToFbService = TestBed.get(ServiceCallToFbService);
    expect(service).toBeTruthy();
  });
});
