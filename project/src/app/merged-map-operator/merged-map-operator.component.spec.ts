import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergedMapOperatorComponent } from './merged-map-operator.component';

describe('MergedMapOperatorComponent', () => {
  let component: MergedMapOperatorComponent;
  let fixture: ComponentFixture<MergedMapOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MergedMapOperatorComponent]
    });
    fixture = TestBed.createComponent(MergedMapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
