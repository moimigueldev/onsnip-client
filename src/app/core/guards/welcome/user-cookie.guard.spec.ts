import { TestBed, async, inject } from '@angular/core/testing';

import { UserCookieGuard } from './user-cookie.guard';

describe('UserCookieGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCookieGuard]
    });
  });

  it('should ...', inject([UserCookieGuard], (guard: UserCookieGuard) => {
    expect(guard).toBeTruthy();
  }));
});
