import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplySellerComponent } from './apply-seller.component';

describe('ApplySellerComponent', () => {
  let component: ApplySellerComponent;
  let fixture: ComponentFixture<ApplySellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplySellerComponent]
    });
    fixture = TestBed.createComponent(ApplySellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
