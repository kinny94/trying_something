import { TestBed, async } from '@angular/core/testing';
import { AllProblemsComponent } from './all-problems.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('SearchingComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              AllProblemsComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: 'all', component: AllProblemsComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the search component', () => {
        const fixture = TestBed.createComponent(AllProblemsComponent);
        const allProblemsComponent = fixture.debugElement.componentInstance;
        expect(allProblemsComponent).toBeTruthy();
    });
});