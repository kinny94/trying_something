import { TestBed, inject } from '@angular/core/testing';
import { MainComponentService } from "./main-component.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainComponentService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [MainComponentService]
        });
    }); 
});