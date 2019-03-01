import { TestBed } from '@angular/core/testing';

import { MouseEffectService } from './mouse-effect.service';

describe('MouseEffectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MouseEffectService = TestBed.get(MouseEffectService);
    expect(service).toBeTruthy();
  });
});
