import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { ApplySellerComponent } from '../components/apply-seller/apply-seller.component';
import { DeliveryPartnerComponent } from '../components/delivery-partner/delivery-partner.component';
import { PrivacyPolicyComponent } from '../components/policies/privacy-policy/privacy-policy.component';
import { SellerPolicyComponent } from '../components/policies/seller-policy/seller-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'apply-seller',
    component: ApplySellerComponent
  },
  {
    path: 'delivery-partner',
    component: DeliveryPartnerComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'seller-policy',
    component: SellerPolicyComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutUsComponent]
