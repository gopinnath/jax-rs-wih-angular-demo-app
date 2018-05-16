import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonGroupComponent } from './non-group.component';

describe('NonGroupComponent', () => {
  let component: NonGroupComponent;
  let fixture: ComponentFixture<NonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
