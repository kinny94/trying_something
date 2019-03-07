import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArrayComponent } from './components/data-structures/array/array.component';
import { StackComponent } from './components/data-structures/stack/stack.component';
import { QueueComponent } from './components/data-structures/queue/queue.component';
import { GraphComponent } from './components/data-structures/graph/graph.component';
import { LinkedlistComponent } from './components/data-structures/linkedlist/linkedlist.component';
import { TreeComponent } from './components/data-structures/tree/tree.component';
import { HashTableComponent } from './components/data-structures/hash-table/hash-table.component';
import { SearchingComponent } from './components/algorithms/searching/searching.component';
import { SortingComponent } from './components/algorithms/sorting/sorting.component';
import { MaterialModule } from './material.module';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GradientCardComponent } from './components/gradient-card/gradient-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        ArrayComponent,
        StackComponent,
        QueueComponent,
        GraphComponent,
        LinkedlistComponent,
        TreeComponent,
        HashTableComponent,
        SearchingComponent,
        SortingComponent,
        GradientCardComponent,
        HomeComponent,
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatTableModule,
        FlexLayoutModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([
          { path: '', component: HomeComponent },
          { path: 'array', component: ArrayComponent },
          { path: 'linkedlist', component: LinkedlistComponent },
          { path: 'stack', component: StackComponent },
          { path: 'queue', component: QueueComponent },
          { path: 'graphs', component: GraphComponent },
          { path: 'trees', component: TreeComponent },
          { path: 'hash-table', component: HashTableComponent },
          { path: 'searching', component: SearchingComponent },
          { path: 'sorting', component: SortingComponent }
        ])
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'codebase'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('codebase');
  });
});
