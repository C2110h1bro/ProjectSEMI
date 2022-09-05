import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterviewComponent } from './materview.component';

describe('MaterviewComponent', () => {
  let component: MaterviewComponent;
  let fixture: ComponentFixture<MaterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
