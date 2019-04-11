import { TestBed } from '@angular/core/testing';

import { MusicaDataService } from './musica-data.service';

describe('MusicaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicaDataService = TestBed.get(MusicaDataService);
    expect(service).toBeTruthy();
  });
});
