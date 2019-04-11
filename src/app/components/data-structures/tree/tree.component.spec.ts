import { TreeComponent} from './tree.component';
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
    type_avg: 'Binary Search Tree Access (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Binary Search Tree Access (Worst)', complexity_worst: 'O(log(n))'
  },
  {
    type_avg: 'Binary Search Tree Search (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Binary Search Tree Search (Worst)', complexity_worst: 'O(n)'
  },
  {
    type_avg: 'Binary Search Tree Insertion (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Binary Search Tree Insertion (Worst)', complexity_worst: 'O(n)'
  },
  {
    type_avg: 'Binary Search Tree Deletion (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Binary Search Tree Deletion (Worst)', complexity_worst: 'O(n)'
  },
  {
    type_avg: 'Red-Black Tree Access (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Red-Black Tree Access (Worst)', complexity_worst: 'Θ(log(n))'
  },
  {
    type_avg: 'Red-Black Tree Search (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Red-Black Tree Search (Worst)', complexity_worst: 'Θ(log(n))'
  },
  {
    type_avg: 'Red-Black Tree Insertion (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Red-Black Tree Insertion (Worst)', complexity_worst: 'Θ(log(n))'
  },
  {
    type_avg: 'Red-Black Tree Deletion (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Red-Black Tree Deletion (Worst)', complexity_worst: 'Θ(log(n))'
  },
];


describe('TreeComponent', () => {
  let comp: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TreeComponent,
        TopicProblemsComponent,
        StarComponent,
        LikeComponent
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        MaterialModule,
        RouterModule.forRoot([
          { path: 'stack', component: TreeComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        ProblemsService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(TreeComponent);
    comp = fixture.componentInstance;
  });

  it('should create the tree component', () => {
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
