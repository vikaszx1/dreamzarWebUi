import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes, routingComponents } from '../app/app-routing/app-routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ApplySellerComponent } from './components/apply-seller/apply-seller.component';
import { FooterComponent } from './components/footer/footer.component';
import { DeliveryPartnerComponent } from './components/delivery-partner/delivery-partner.component';
import { PrivacyPolicyComponent } from './components/policies/privacy-policy/privacy-policy.component';
import { SellerPolicyComponent } from './components/policies/seller-policy/seller-policy.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

routes

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    ContactUsComponent,
    ApplySellerComponent,
    FooterComponent,
    DeliveryPartnerComponent,
    PrivacyPolicyComponent,
    SellerPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
