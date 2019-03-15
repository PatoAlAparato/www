import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { portfolioEditComponent } from './portfolio-edit.component';

describe('portfolioEditComponent', () => {
  let component: portfolioEditComponent;
  let fixture: ComponentFixture<portfolioEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ portfolioEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(portfolioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
