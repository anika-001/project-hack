import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadschedComponent } from './uploadsched.component';

describe('UploadschedComponent', () => {
  let component: UploadschedComponent;
  let fixture: ComponentFixture<UploadschedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadschedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadschedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
