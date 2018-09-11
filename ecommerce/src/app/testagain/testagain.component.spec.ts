import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestagainComponent } from './testagain.component';

describe('TestagainComponent', () => {
  let component: TestagainComponent;
  let fixture: ComponentFixture<TestagainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestagainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestagainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
