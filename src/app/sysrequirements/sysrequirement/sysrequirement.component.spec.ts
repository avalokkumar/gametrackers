import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysrequirementComponent } from './sysrequirement.component';

describe('SysrequirementComponent', () => {
  let component: SysrequirementComponent;
  let fixture: ComponentFixture<SysrequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysrequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysrequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
