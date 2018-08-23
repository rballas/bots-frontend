import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsOptionsComponent } from './builds-options.component';

describe('BuildsOptionsComponent', () => {
  let component: BuildsOptionsComponent;
  let fixture: ComponentFixture<BuildsOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildsOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
