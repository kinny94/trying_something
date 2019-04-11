import { GraphComponent } from './graph.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ProblemsService } from './../../../services/problems/problems.service';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from './../../../material.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../../../environments/environment.prod';
import { Complexities } from './../../../../models/model';
import { TopicProblemsComponent } from '../../topic-problems/topic-problems.component';
import { StarComponent } from '../../star/star.component';
import { LikeComponent } from '../../like/like.component';

const MOCK_ELEMENT_DATA: Complexities[] = [
  {type_avg: 'Add Vertex (Average)', complexity_avg: 'O(1)', type_worst: 'Add Vertex (Worst)', complexity_worst: 'O(1)'},
  {type_avg: 'Add Edge (Average)', complexity_avg: 'O(1)', type_worst: 'Add Edge (Worst)', complexity_worst: 'O(n)'},
  {
    type_avg: 'Remove Vertex (Average)', complexity_avg: 'O(|V| + |E|)',
    type_worst: 'Remove Vertex (Worst)', complexity_worst: 'O(|V| + |E|)'
  },
  {type_avg: 'Deletion (Average)', complexity_avg: 'O(n)', type_worst: 'Deletion (Worst)', complexity_worst: 'O s(n)'},
];

describe('GraphComponent', () => {
  let comp: GraphComponent;
  let fixture: ComponentFixture<GraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GraphComponent,
        TopicProblemsComponent,
        StarComponent,
        LikeComponent
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        MaterialModule,
        RouterModule.forRoot([
          { path: 'graph', component: GraphComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        ProblemsService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(GraphComponent);
    comp = fixture.componentInstance;
  });

  it('should create the graph component', () => {
    expect(comp).toBeTruthy();
  });

  it('should have four elements in the display column', () => {
    expect(comp.displayedColumns.length).toEqual(4);
  });

  it('datasource should be equal to the ELEMENT_DATA const', () => {
    expect(comp.dataSource).toEqual(MOCK_ELEMENT_DATA);
  });

  it('datasource should have the same number of element as the MoCK_ELEMENT_DATA const', () => {
    expect(comp.dataSource.length).toEqual(MOCK_ELEMENT_DATA.length);
  });
});
