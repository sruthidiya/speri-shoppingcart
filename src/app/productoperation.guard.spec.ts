import { TestBed } from '@angular/core/testing';

import { ProductoperationGuard } from './productoperation.guard';

describe('ProductoperationGuard', () => {
  let guard: ProductoperationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductoperationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
