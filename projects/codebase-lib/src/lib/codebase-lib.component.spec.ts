import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebaseLibComponent } from './codebase-lib.component';

describe('CodebaseLibComponent', () => {
  let component: CodebaseLibComponent;
  let fixture: ComponentFixture<CodebaseLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebaseLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebaseLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
