import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerDeskComponent } from './computer-desk.component';

describe('ComputerDeskComponent', () => {
  let component: ComputerDeskComponent;
  let fixture: ComponentFixture<ComputerDeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerDeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
