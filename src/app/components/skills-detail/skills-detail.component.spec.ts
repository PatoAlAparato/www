import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDetailComponent } from './skills-detail.component';

describe('SkillsDetailComponent', () => {
  let component: SkillsDetailComponent;
  let fixture: ComponentFixture<SkillsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
