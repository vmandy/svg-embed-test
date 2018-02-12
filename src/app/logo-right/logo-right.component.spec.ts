import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoRightComponent } from './logo-right.component';

describe('LogoRightComponent', () => {
  let component: LogoRightComponent;
  let fixture: ComponentFixture<LogoRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
