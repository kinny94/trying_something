import { ArrayComponent } from './array.component';
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
  {type_avg: 'Access (Average)', complexity_avg: 'Θ(1)', type_worst: 'Access (Worst)', complexity_worst: 'Θ(1)'},
  {type_avg: 'Search (Average)', complexity_avg: 'Θ(n)', type_worst: 'Search (Worst)', complexity_worst: 'Θ(n)'},
  {type_avg: 'Insertion (Average)', complexity_avg: 'Θ(n)', type_worst: 'Insertion (Worst)', complexity_worst: 'Θ(n)'},
  {type_avg: 'Deletion (Average)', complexity_avg: 'Θ(n)', type_worst: 'Deletion (Worst)', complexity_worst: 'Θ(n)'},
];

describe('ArrayComponent', () => {
  let comp: ArrayComponent;
  let fixture: ComponentFixture<ArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArrayComponent,
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        MaterialModule,
        RouterModule.forRoot([
          { path: 'array', component: ArrayComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        ProblemsService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(ArrayComponent);
    comp = fixture.componentInstance;
  });

  it('should create the Array component', () => {
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

  it('datasource should have the same number of element as the MoCK_ELEMENT_DATA const', () => {
    expect(comp.dataSource.length).toEqual(MOCK_ELEMENT_DATA.length);
  });

});
