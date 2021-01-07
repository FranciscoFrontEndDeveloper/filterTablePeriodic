import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformElementComponent } from './inform-element.component';

describe('InformElementComponent', () => {
  let component: InformElementComponent;
  let fixture: ComponentFixture<InformElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
