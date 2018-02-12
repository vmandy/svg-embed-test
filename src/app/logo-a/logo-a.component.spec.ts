import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAComponent } from './logo-a.component';

describe('LogoAComponent', () => {
  let component: LogoAComponent;
  let fixture: ComponentFixture<LogoAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
