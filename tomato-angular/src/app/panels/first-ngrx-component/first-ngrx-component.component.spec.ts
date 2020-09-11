import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNgrxComponentComponent } from './first-ngrx-component.component';

describe('FirstNgrxComponentComponent', () => {
  let component: FirstNgrxComponentComponent;
  let fixture: ComponentFixture<FirstNgrxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNgrxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNgrxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
