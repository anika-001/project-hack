import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalmComponent } from './calm.component';

describe('CalmComponent', () => {
  let component: CalmComponent;
  let fixture: ComponentFixture<CalmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
