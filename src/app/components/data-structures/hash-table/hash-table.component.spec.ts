import { HashTableComponent } from './hash-table.component';
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
  {type_avg: 'Access (Average)', complexity_avg: 'N/A', type_worst: 'Access (Worst)', complexity_worst: 'N/A'},
  {type_avg: 'Search (Average)', complexity_avg: 'Θ(1)', type_worst: 'Search (Worst)', complexity_worst: 'Θ(n)'},
  {type_avg: 'Insertion (Average)', complexity_avg: 'Θ(1)', type_worst: 'Insertion (Worst)', complexity_worst: 'Θ(n)'},
  {type_avg: 'Deletion (Average)', complexity_avg: 'Θ(1)', type_worst: 'Deletion (Worst)', complexity_worst: 'Θ(n)'},
];

describe('HashTableComponent', () => {
  let comp: HashTableComponent;
  let fixture: ComponentFixture<HashTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HashTableComponent,
        TopicProblemsComponent,
        StarComponent,
        LikeComponent
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        MaterialModule,
        RouterModule.forRoot([
          { path: 'hash-table', component: HashTableComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        ProblemsService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(HashTableComponent);
    comp = fixture.componentInstance;
  });

  it('should create the hash-table component', () => {
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
