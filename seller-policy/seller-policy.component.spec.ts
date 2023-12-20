import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPolicyComponent } from './seller-policy.component';

describe('SellerPolicyComponent', () => {
  let component: SellerPolicyComponent;
  let fixture: ComponentFixture<SellerPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerPolicyComponent]
    });
    fixture = TestBed.createComponent(SellerPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
