import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StackComponent } from './stack.component';

describe('StackComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StackComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: 'stack', component: StackComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the stack component', () => {
        const fixture = TestBed.createComponent(StackComponent);
        const stackComponent = fixture.debugElement.componentInstance;
        expect(stackComponent).toBeTruthy();
    });
});