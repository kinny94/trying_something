import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LinkedlistComponent } from './linkedlist.component';

describe('LinkedlistComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LinkedlistComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: 'linkedlist', component: LinkedlistComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the linkedlist component', () => {
        const fixture = TestBed.createComponent(LinkedlistComponent);
        const linkedlistComponent = fixture.debugElement.componentInstance;
        expect(linkedlistComponent).toBeTruthy();
    });
});