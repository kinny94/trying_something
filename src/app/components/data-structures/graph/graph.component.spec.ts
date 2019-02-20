import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GraphComponent } from './graph.component';

describe('GraphComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GraphComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: 'graph', component: GraphComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the graph component', () => {
        const fixture = TestBed.createComponent(GraphComponent);
        const graphComponent = fixture.debugElement.componentInstance;
        expect(graphComponent).toBeTruthy();
    });
});