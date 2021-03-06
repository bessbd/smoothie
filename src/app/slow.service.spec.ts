import { TestBed } from '@angular/core/testing';

import { SlowService } from './slow.service';
import { CACHE_SIZE_LIMIT } from './cache.service';

describe('SlowService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: CACHE_SIZE_LIMIT, useValue: 3 }
    ]
  }));

  it('should be created', () => {
    const service: SlowService = TestBed.get(SlowService);
    expect(service).toBeTruthy();
  });
});
