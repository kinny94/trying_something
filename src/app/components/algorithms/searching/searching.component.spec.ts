import { SearchingComponent } from './searching.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ProblemsService } from './../../../services/problems/problems.service';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from './../../../material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../../../environments/environment.prod';
import { Complexities } from './../../../../models/model';
import { StarComponent } from '../../star/star.component';
import { TopicProblemsComponent } from '../../topic-problems/topic-problems.component';

const MOCK_ELEMENT_DATA: Complexities[] = [
  {type_avg: 'Linear Search (Average)', complexity_avg: 'O(n)', type_worst: 'Linear Search (Worst)', complexity_worst: 'O(n)'},
  {type_avg: 'Binary Search (Average)', complexity_avg: 'O(log(n))', type_worst: 'Linear Search (Worst)', complexity_worst: 'O(log(n))'},
];

describe('SearchingComponent', () => {
  let comp: SearchingComponent;
  let fixture: ComponentFixture<SearchingComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchingComponent,
        TopicProblemsComponent,
        StarComponent
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        MaterialModule,
        RouterModule.forRoot([
          { path: 'searching', component: SearchingComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        ProblemsService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });
    
    fixture = TestBed.createComponent(SearchingComponent);
    comp = fixture.componentInstance;
  });
  
  it('should create the Searching component', () => {
    expect(comp).toBeTruthy();
  });
  
  it('should change the name of the problem', () => {
    const name = 'Hello Array';
    expect(comp.changeName(name)).toEqual('HelloArray');
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
