import { TestBed, inject } from '@angular/core/testing';
import { ProblemsService } from './problems.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainComponentService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProblemsService]
        });
    }); 
});