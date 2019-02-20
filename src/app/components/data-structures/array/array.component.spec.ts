import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ArrayComponent } from './array.component';

describe('ArrayComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ArrayComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: 'array', component: ArrayComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the array component', () => {
        const fixture = TestBed.createComponent(ArrayComponent);
        const arrayComponent = fixture.debugElement.componentInstance;
        expect(arrayComponent).toBeTruthy();
    });
});