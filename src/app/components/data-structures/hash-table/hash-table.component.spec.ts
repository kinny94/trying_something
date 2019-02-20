import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HashTableComponent } from './hash-table.component';

describe('HashTableComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HashTableComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: 'hash-table', component: HashTableComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the hash-table component', () => {
        const fixture = TestBed.createComponent(HashTableComponent);
        const hashTableComponent = fixture.debugElement.componentInstance;
        expect(hashTableComponent).toBeTruthy();
    });
});