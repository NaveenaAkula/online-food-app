import { TestBed } from '@angular/core/testing';

import { CustomerAddService } from './customer-add.service';

describe('CustomerAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerAddService = TestBed.get(CustomerAddService);
    expect(service).toBeTruthy();
  });
});
