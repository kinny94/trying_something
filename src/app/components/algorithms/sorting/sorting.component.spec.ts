import { SortingComponent } from './sorting.component';
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
import { LikeComponent } from '../../like/like.component';

const MOCK_ELEMENT_DATA: Complexities[] = [
  {
    type_avg: 'Quicksort (Average)', complexity_avg: 'Θ(nlog(n))',
    type_worst: 'Quicksort (Worst)', complexity_worst: 'O(n^2)'
  },
  {
    type_avg: 'Mergesort (Average)', complexity_avg: 'Θ(nlog(n))',
    type_worst: 'Mergesort (Worst)', complexity_worst: 'Θ(n log(n))'
  },
  {
    type_avg: 'Bubble Sort (Average)', complexity_avg: 'Θ(n^2)	',
    type_worst: 'Bubble Sort (Worst)', complexity_worst: 'Θ(n^2)'
  },
  {
    type_avg: 'Insertion Sort (Average)', complexity_avg: 'Θ(n^2)',
    type_worst: 'Insertion Sort (Worst)', complexity_worst: 'Θ(n^2)'
  },
  {
    type_avg: 'Selection Sort (Average)', complexity_avg: 'Θ(n^2)',
    type_worst: 'Selection Sort (Worst)', complexity_worst: 'Θ(n^2)'
  },
  {
    type_avg: 'Shell Sort (Average)', complexity_avg: 'Θ(n(log(n))^2)',
    type_worst: 'Shell Sort (Worst)', complexity_worst: 'Θ(n(log(n))^2)'
  },
  {
    type_avg: 'Insertion Sort (Average)', complexity_avg: 'Θ(n^2)',
    type_worst: 'Deletion (Worst)', complexity_worst: 'Θ(n^2)'
  },

];

describe('SortingComponent', () => {
  let comp: SortingComponent;
  let fixture: ComponentFixture<SortingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SortingComponent,
        TopicProblemsComponent,
        StarComponent,
        LikeComponent
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        MaterialModule,
        RouterModule.forRoot([
          { path: 'sorting', component: SortingComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        ProblemsService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(SortingComponent);
    comp = fixture.componentInstance;
  });

  it('should create the Sorting component', () => {
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
