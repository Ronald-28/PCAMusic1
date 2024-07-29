import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { IntroGuard } from './intro.guard';

describe('IntroGuard', () => {
  let guard: IntroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IntroGuard); 
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); 
  });
});

