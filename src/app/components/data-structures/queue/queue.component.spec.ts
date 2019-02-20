import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QueueComponent } from './queue.component';

describe('QueueComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                QueueComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: 'queue', component: QueueComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the queue component', () => {
        const fixture = TestBed.createComponent(QueueComponent);
        const queueComponent = fixture.debugElement.componentInstance;
        expect(queueComponent).toBeTruthy();
    });
});