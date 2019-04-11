import { LinkedlistComponent } from './linkedlist.component';
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
    {
      type_avg: 'Singly-Linked-List Access (Average)', complexity_avg: 'O(n)',
      type_worst: 'Singly-Linked-List Access (Worst)', complexity_worst: 'O(n)'
    },
    {
      type_avg: 'Singly-Linked-List Search (Average)', complexity_avg: 'O(n)',
      type_worst: 'Singly-Linked-List Search (Worst)', complexity_worst: 'O(n)'
    },
    {
      type_avg: 'Singly-Linked-List Insertion (Average)', complexity_avg: 'O(1)',
      type_worst: 'Singly-Linked-List Insertion (Worst)', complexity_worst: 'O(1)'
    },
    {
      type_avg: 'Singly-Linked-List Deletion (Average)', complexity_avg: 'O(1)',
      type_worst: 'Singly-Linked-ListDeletion (Worst)', complexity_worst: 'O(1)'
    },
    {
      type_avg: 'Doubly-Linked-List Access (Average)', complexity_avg: 'O(n)',
      type_worst: 'Doubly-Linked-List Access (Worst)', complexity_worst: 'O(n)'
    },
    {
      type_avg: 'Doubly-Linked-List Search (Average)', complexity_avg: 'O(n)',
      type_worst: 'Doubly-Linked-List Search (Worst)', complexity_worst: 'O(n)'
    },
    {
      type_avg: 'Doubly-Linked-List Insertion (Average)', complexity_avg: 'O(1)',
      type_worst: 'Doubly-Linked-List Insertion (Worst)', complexity_worst: 'O(1)'
    },
    {
      type_avg: 'Doubly-Linked-List Deletion (Average)', complexity_avg: 'O(1)',
      type_worst: 'Doubly-Linked-List Deletion (Worst)', complexity_worst: 'O(1)'
    }
  ];

describe('LinkedlistComponent', () => {
  let comp: LinkedlistComponent;
  let fixture: ComponentFixture<LinkedlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LinkedlistComponent,
        StarComponent,
        LikeComponent,
        TopicProblemsComponent
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        MaterialModule,
        RouterModule.forRoot([
          { path: 'linkedlist', component: LinkedlistComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        ProblemsService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(LinkedlistComponent);
    comp = fixture.componentInstance;
  });

  it('should create the linkedlist component', () => {
    expect(comp).toBeTruthy();
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
