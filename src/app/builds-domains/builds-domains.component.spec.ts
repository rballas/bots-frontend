import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildsDomainsComponent } from './builds-domains.component';

describe('BuildsDomainsComponent', () => {
  let component: BuildsDomainsComponent;
  let fixture: ComponentFixture<BuildsDomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildsDomainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildsDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
