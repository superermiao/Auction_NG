import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeatailComponent } from './product-deatail.component';

describe('ProductDeatailComponent', () => {
  let component: ProductDeatailComponent;
  let fixture: ComponentFixture<ProductDeatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
