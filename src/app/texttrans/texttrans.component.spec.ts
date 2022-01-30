import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttransComponent } from './texttrans.component';

describe('TexttransComponent', () => {
  let component: TexttransComponent;
  let fixture: ComponentFixture<TexttransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexttransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexttransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
