import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLeftComponent } from './logo-left.component';

describe('LogoLeftComponent', () => {
  let component: LogoLeftComponent;
  let fixture: ComponentFixture<LogoLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
