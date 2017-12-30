/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GyphyServiceService } from './gyphy-service.service';

describe('GyphyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GyphyServiceService]
    });
  });

  it('should ...', inject([GyphyServiceService], (service: GyphyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
