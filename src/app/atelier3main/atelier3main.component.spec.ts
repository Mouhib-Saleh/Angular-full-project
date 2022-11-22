import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atelier3mainComponent } from './atelier3main.component';

describe('Atelier3mainComponent', () => {
  let component: Atelier3mainComponent;
  let fixture: ComponentFixture<Atelier3mainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Atelier3mainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Atelier3mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
