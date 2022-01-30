import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigntComponent } from './signt.component';

describe('SigntComponent', () => {
  let component: SigntComponent;
  let fixture: ComponentFixture<SigntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
