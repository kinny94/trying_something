import { StackComponent } from './stack.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ProblemsService } from './../../../services/problems/problems.service';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from './../../../material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../../../environments/environment.prod';
import { Complexities } from './../../../../models/model';

const MOCK_ELEMENT_DATA: Complexities[] = [
  {type_avg: 'Access (Average)', complexity_avg: 'O(n)', type_worst: 'Access (Worst)', complexity_worst: 'O(n)'},
  {type_avg: 'Search (Average)', complexity_avg: 'O(n)', type_worst: 'Search (Worst)', complexity_worst: 'O(n)'},
  {type_avg: 'Insertion (Average)', complexity_avg: 'O(1)', type_worst: 'Insertion (Worst)', complexity_worst: 'O(1)'},
  {type_avg: 'Deletion (Average)', complexity_avg: 'O(1)', type_worst: 'Deletion (Worst)', complexity_worst: 'O(1)'},
];

describe('StackComponent', () => {
  let comp: StackComponent;
  let fixture: ComponentFixture<StackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StackComponent,
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        MaterialModule,
        RouterModule.forRoot([
          { path: 'stack', component: StackComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        ProblemsService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(StackComponent);
    comp = fixture.componentInstance;
  });

  it('should create the stack component', () => {
    expect(comp).toBeTruthy();
  });

  it('should change the name of the problem', () => {
    const name = 'Hello Stack';
    expect(comp.changeName(name)).toEqual('HelloStack');
  });

  it('should have four elements in the display column', () => {
    expect(comp.displayedColumns.length).toEqual(4);
  });

  it('datasource should be equal to the ELEMENT_DATA const', () => {
    expect(comp.dataSource).toEqual(MOCK_ELEMENT_DATA);
  });

  it('datasource should have the same number of element as the MOCK_ELEMENT_DATA const', () => {
    expect(comp.dataSource.length).toEqual(MOCK_ELEMENT_DATA.length);
  });
});
