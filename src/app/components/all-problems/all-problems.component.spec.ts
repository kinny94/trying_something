import { TestBed, async } from '@angular/core/testing';
import { AllProblemsComponent, Problem } from './all-problems.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('SearchingComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
              AllProblemsComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                FormsModule,
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

    it('should return the formatted name', () => {
        const fixture = TestBed.createComponent(AllProblemsComponent);
        const allProblemComponents = fixture.componentInstance;
        const string = 'QuestionName';
        expect(allProblemComponents.changeName(string)).toEqual('Question Name');
    });
});

const mockProblems: Problem[] = [
    { name: 'PoblemName', topic: 'array' },
    { name: 'FilterThis', topic: 'linkedlist'}
];