import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
        HttpClientModule,
        HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

});
