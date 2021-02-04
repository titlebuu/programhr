import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcodeComponent } from './addcode.component';

describe('AddcodeComponent', () => {
  let component: AddcodeComponent;
  let fixture: ComponentFixture<AddcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
