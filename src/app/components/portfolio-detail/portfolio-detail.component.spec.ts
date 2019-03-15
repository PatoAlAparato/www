import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { portfolioDetailComponent } from './portfolio-detail.component';

describe('portfolioDetailComponent', () => {
  let component: portfolioDetailComponent;
  let fixture: ComponentFixture<portfolioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ portfolioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(portfolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
