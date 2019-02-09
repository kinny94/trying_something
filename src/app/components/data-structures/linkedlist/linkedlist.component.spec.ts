import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedlistComponent } from './linkedlist.component';

describe('LinkedlistComponent', () => {
  let component: LinkedlistComponent;
  let fixture: ComponentFixture<LinkedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
