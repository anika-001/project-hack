import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsceduleComponent } from './viewscedule.component';

describe('ViewsceduleComponent', () => {
  let component: ViewsceduleComponent;
  let fixture: ComponentFixture<ViewsceduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsceduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsceduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
