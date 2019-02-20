import { TestBed, async } from '@angular/core/testing';
import { SortingComponent } from './sorting.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('SortingComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SortingComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: 'sorting', component: SortingComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the sorting component', () => {
        const fixture = TestBed.createComponent(SortingComponent);
        const sortingComponent = fixture.debugElement.componentInstance;
        expect(sortingComponent).toBeTruthy();
    });
});