import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GradientCardComponent } from '../gradient-card/gradient-card.component';

describe('HomeComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                GradientCardComponent
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

    it('should create the home component', () => {
        const fixture = TestBed.createComponent(HomeComponent);
        const homeComponent = fixture.debugElement.componentInstance;
        expect(homeComponent).toBeTruthy();
    });
});