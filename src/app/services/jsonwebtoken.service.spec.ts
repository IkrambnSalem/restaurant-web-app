import { TestBed } from '@angular/core/testing';

import { JsonwebtokenService } from './jsonwebtoken.service';

describe('JsonwebtokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonwebtokenService = TestBed.get(JsonwebtokenService);
    expect(service).toBeTruthy();
  });
});
