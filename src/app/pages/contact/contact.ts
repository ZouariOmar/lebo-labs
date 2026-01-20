import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment.development';
import { Footer } from '../../core/components/footer/footer';
import { Navbar } from '../../core/components/navbar/navbar';
import ContactInfo from '../../models/contact-info';
import WebsiteInfo from '../../models/website-info';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Navbar, Footer, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})

export class Contact {
  public readonly contact!: ContactInfo;
  public readonly website!: WebsiteInfo;
  public isLoading: boolean;
  public msg!: {
    success: string;
    error: string;
  }

  constructor() {
    this.contact = new ContactInfo(0, '', '', '', '', "zouariomar20");
    this.website = new WebsiteInfo("Lebo", "Labs");
    this.isLoading = false;
    this.msg = {
      success: '',
      error: ''
    };
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.value.email)) {
      this.msg.error = 'Invalid email format!';
      return;
    }

    this.isLoading = true;
    this.msg.success = '';
    this.msg.error = '';

    const templateParams = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    emailjs.send(
      environment.emailJsServiceId,
      environment.emailJsTemplateId,
      templateParams,
      { publicKey: environment.emailJsPublicKey }
    )
      .then(() => {
        this.isLoading = false;
        this.msg.success = "Your message has been sent!";
        form.reset();
      })
      .catch((error) => {
        console.error('FAILED...', (error as EmailJSResponseStatus)?.text);
        this.isLoading = false;
        this.msg.error = "Failed to send message. Please try again.";
        form.reset();
      });
  }
} // Contact class
