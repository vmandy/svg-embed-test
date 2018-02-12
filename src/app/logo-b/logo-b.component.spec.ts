import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBComponent } from './logo-b.component';

describe('LogoBComponent', () => {
  let component: LogoBComponent;
  let fixture: ComponentFixture<LogoBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
