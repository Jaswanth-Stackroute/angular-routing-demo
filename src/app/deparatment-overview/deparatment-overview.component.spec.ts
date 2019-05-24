import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparatmentOverviewComponent } from './deparatment-overview.component';

describe('DeparatmentOverviewComponent', () => {
  let component: DeparatmentOverviewComponent;
  let fixture: ComponentFixture<DeparatmentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparatmentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparatmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
