import { TestBed, async } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TreeComponent } from './tree.component';

describe('TreeComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TreeComponent,
            ],
            imports: [
                MaterialModule,
                HttpClientModule,
                RouterModule.forRoot([
                    { path: 'tree', component: TreeComponent, pathMatch: 'full' },
                  ])
            ],
        }).compileComponents();
    }));

    it('should create the tree component', () => {
        const fixture = TestBed.createComponent(TreeComponent);
        const treeComponent = fixture.debugElement.componentInstance;
        expect(treeComponent).toBeTruthy();
    });
});