import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyTestComponent } from './dependency-test.component';

describe('DependencyTestComponent', () => {
  let component: DependencyTestComponent;
  let fixture: ComponentFixture<DependencyTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DependencyTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DependencyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
