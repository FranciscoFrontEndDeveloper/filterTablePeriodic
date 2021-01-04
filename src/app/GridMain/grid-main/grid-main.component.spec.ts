import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMainComponent } from './grid-main.component';

describe('GridMainComponent', () => {
  let component: GridMainComponent;
  let fixture: ComponentFixture<GridMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
