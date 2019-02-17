import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { GradientCardComponent } from './components/gradient-card/gradient-card.component';
import { HomeComponent } from './components/home/home.component';
import { ArrayComponent } from './components/data-structures/array/array.component';
import { LinkedlistComponent } from './components/data-structures//linkedlist/linkedlist.component';
import { StackComponent } from './components/data-structures//stack/stack.component';
import { QueueComponent } from './components/data-structures/queue/queue.component';
import { GraphComponent } from './components/data-structures/graph/graph.component';
import { TreeComponent } from './/components/data-structures/tree/tree.component';
import { HashTableComponent } from './components/data-structures/hash-table/hash-table.component';
import { SearchingComponent } from './components/algorithms/searching/searching.component';
import { SortingComponent } from './components/algorithms/sorting/sorting.component';
import { ProblemComponent } from './components/problem/problem.component';
import { HighlightCodeDirective } from './directives/highlight';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GradientCardComponent,
    HomeComponent,
    ArrayComponent,
    LinkedlistComponent,
    StackComponent,
    QueueComponent,
    GraphComponent,
    TreeComponent,
    HashTableComponent,
    SearchingComponent,
    SortingComponent,
    ProblemComponent,
    HighlightCodeDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'array', component: ArrayComponent, pathMatch: 'full' },
      { path: 'linkedlist', component: LinkedlistComponent, pathMatch: 'full' },
      { path: 'stack', component: StackComponent, pathMatch: 'full' },
      { path: 'queue', component: QueueComponent, pathMatch: 'full' },
      { path: 'graphs', component: GraphComponent, pathMatch: 'full' },
      { path: 'trees', component: TreeComponent, pathMatch: 'full' },
      { path: 'hash-table', component: HashTableComponent, pathMatch: 'full' },
      { path: 'searching', component: SearchingComponent, pathMatch: 'full' },
      { path: 'sorting', component: SortingComponent, pathMatch: 'full' },
      { path: ':type/:problem', component: ProblemComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
