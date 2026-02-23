import { TestBed } from '@angular/core/testing';

import { UsersLists } from './users-lists';

describe('UsersLists', () => {
  let service: UsersLists;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersLists);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
