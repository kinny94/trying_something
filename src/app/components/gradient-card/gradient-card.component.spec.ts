import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { GradientCardComponent } from './gradient-card.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GradientCardComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GradientCardComponent,
                HomeComponent
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: '', component: HomeComponent, pathMatch: 'full' },
                ]),
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents();
    }));

    it('should create the gradient component', () => {
        const fixture = TestBed.createComponent(GradientCardComponent);
        const gradientCardComponent = fixture.debugElement.componentInstance;
        expect(gradientCardComponent).toBeTruthy();
    });
});