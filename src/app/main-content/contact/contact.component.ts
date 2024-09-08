import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  imageSrc = './assets/icons/checkbox_default.png';
  privacyPolicy = false;
  errorTxt = false;
  formSubmitted = false;
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  markFormFieldAsTouched(form: NgForm) {
    Object.values(form.controls).forEach((control) => {
      control.markAsTouched();
    });
  }

  onSubmit(ngForm: NgForm) {
    debugger;
    if (ngForm.valid && ngForm.submitted && this.privacyPolicy == true) {
      console.log(this.contactData);
    } else if (this.privacyPolicy == false ) {
      this.imageSrc = './assets/icons/errorBox.png';
      this.errorTxt = true;
      this.markFormFieldAsTouched(ngForm);
    }
    else if (this.privacyPolicy && ngForm.invalid) {
        this.markFormFieldAsTouched(ngForm);
    }
  }

  validateName(input:any) {
    input.value = input.value.replace(/[^a-zA-Z!?]/g, '');
  }

  policyTrue() {
    this.privacyPolicy = true;
    if (
      (this.privacyPolicy && this.imageSrc == './assets/icons/errorBox.png') ||this.imageSrc == './assets/icons/checkbox_default.png') {
      this.imageSrc = './assets/icons/checkedBox.png';
      this.errorTxt = false;
    } else if (
      this.privacyPolicy && this.imageSrc == './assets/icons/checkedBox.png'
    ) {
      this.imageSrc = './assets/icons/checkbox_default.png';
      this.privacyPolicy = false;
    } else {
      this.imageSrc = './assets/icons/errorBox.png';
    }
  }};

