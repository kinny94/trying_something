import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProblemComponent } from './problem.component';

describe('ProblemComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProblemComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: ':type/:problem', component: ProblemComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the problem component', () => {
        const fixture = TestBed.createComponent(ProblemComponent);
        const problemComponent = fixture.debugElement.componentInstance;
        expect(problemComponent).toBeTruthy();
    });
});