import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-partner',
  templateUrl: './delivery-partner.component.html',
  styleUrls: ['./delivery-partner.component.scss']
})
export class DeliveryPartnerComponent {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('fform') viewProductFormDirective: any;

  sellerRegisterForm!: FormGroup;
  // invalidEmailMsg : string = 'Email id is required';

  constructor(private lg: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.sellerRegisterForm = this.lg.group({
      emailId: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      pin: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      district: ['', [Validators.required]],
    });

    this.sellerRegisterForm.valueChanges
      .subscribe(data => this.onSellerRegisterValueChanged(data));

  }

  onSellerRegisterValueChanged(data: any) {
    if (this.sellerRegisterForm.dirty && this.sellerRegisterForm.value.firstName != "") {
      this.formErrors.firstName = this.validationMessages.firstName.required;
    }

    if (this.sellerRegisterForm.dirty && this.sellerRegisterForm.value.lastName != "") {
      this.formErrors.lastName = this.validationMessages.lastName.required;
    }

    if (this.sellerRegisterForm.dirty && this.sellerRegisterForm.value.emailId != "") {
      this.formErrors.emailId = this.validationMessages.emailId.invalid;
    } else {
      this.formErrors.emailId = this.validationMessages.emailId.required;
    }

    if (this.sellerRegisterForm.dirty && this.sellerRegisterForm.value.mobileNumber != "") {
      this.formErrors.mobileNumber = this.validationMessages.mobileNumber.invalid;
    } else {
      this.formErrors.mobileNumber = this.validationMessages.mobileNumber.required;
    }

    if (this.sellerRegisterForm.dirty && this.sellerRegisterForm.value.pin != "") {
      this.formErrors.pin = this.validationMessages.pin.required;
    }

    if (this.sellerRegisterForm.dirty && this.sellerRegisterForm.value.address != "") {
      this.formErrors.address = this.validationMessages.address.required;
    }

    if (this.sellerRegisterForm.dirty && this.sellerRegisterForm.value.city != "") {
      this.formErrors.city = this.validationMessages.city.required;
    }
    if (this.sellerRegisterForm.dirty && this.sellerRegisterForm.value.district != "") {
      this.formErrors.district = this.validationMessages.district.required;
    }
  }

  formErrors: any = {
    'firstName': 'First name is required.',
    'lastName': 'Last name is required.',
    'emailId': 'Email id is required',
    'mobileNumber': 'Mobile Number is required.',
    'pin': 'Pin is required',
    'address': 'Address is required',
    'city': 'City is required',
    'district': 'District is required',
  };

  validationMessages: any = {
    'firstName': {
      'required': 'First name is required.'
    },
    'lastName': {
      'required': 'Last name is required.'
    },
    'emailId': {
      'invalid': 'Email id is invalid.',
      'required': 'Email id is required.'
    },
    'mobileNumber': {
      'invalid': 'Mobile Number is invalid.',
      'required': 'Mobile Number is required.'
    },
    'pin': {
      'required': 'Pin is required.'
    },
    'address': {
      'required': 'Address is required.'
    },
    'city': {
      'required': 'City is required.'
    },
    'district': {
      'required': 'District is required.'
    }
  };
}
