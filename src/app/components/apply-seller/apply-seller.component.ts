import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-apply-seller',
  templateUrl: './apply-seller.component.html',
  styleUrls: ['./apply-seller.component.scss']
})
export class ApplySellerComponent implements OnInit {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  @ViewChild('fform') viewProductFormDirective: any;

  sellerRegisterForm!: FormGroup;
  // invalidEmailMsg : string = 'Email id is required';

  constructor(private lg: FormBuilder) {
    this.createForm();
  }

  ngOnInit() { }

  createForm(): void {
    this.sellerRegisterForm = this.lg.group({
      emailId: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      storeName: ['', [Validators.required]],
      storeAddress: ['', [Validators.required]],
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

    if (this.sellerRegisterForm.dirty && this.sellerRegisterForm.value.storeName != "") {
      this.formErrors.storeName = this.validationMessages.storeName.required;
    }

    if (this.sellerRegisterForm.dirty && this.sellerRegisterForm.value.storeAddress != "") {
      this.formErrors.storeAddress = this.validationMessages.storeAddress.required;
    }
  }

  formErrors: any = {
    'firstName': 'First name is required.',
    'lastName': 'Last name is required.',
    'emailId': 'Email id is required',
    'mobileNumber': 'Phone Number is required.',
    'storeName': 'Store Name is required',
    'storeAddress': 'Store Address is required'
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
      'invalid': 'Phone Number is invalid.',
      'required': 'Phone Number is required.'
    },
    'storeName': {
      'required': 'Store Name is required.'
    },
    'storeAddress': {
      'required': 'Store Address is required.'
    }
  };
}
