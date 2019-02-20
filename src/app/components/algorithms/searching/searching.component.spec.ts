import { TestBed, async } from '@angular/core/testing';
import { SearchingComponent } from './searching.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('SearchingComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchingComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: 'searching', component: SearchingComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the search component', () => {
        const fixture = TestBed.createComponent(SearchingComponent);
        const searchComponent = fixture.debugElement.componentInstance;
        expect(searchComponent).toBeTruthy();
    });
});