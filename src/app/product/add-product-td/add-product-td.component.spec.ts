import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductTDComponent } from './add-product-td.component';

describe('AddProductTDComponent', () => {
  let component: AddProductTDComponent;
  let fixture: ComponentFixture<AddProductTDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductTDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
