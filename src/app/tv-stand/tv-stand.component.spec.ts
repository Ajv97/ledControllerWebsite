import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvStandComponent } from './tv-stand.component';

describe('TvStandComponent', () => {
  let component: TvStandComponent;
  let fixture: ComponentFixture<TvStandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvStandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
