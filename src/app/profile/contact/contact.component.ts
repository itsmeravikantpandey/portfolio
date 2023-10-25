import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';

import { environment } from '../../../environments/environment';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: any = {};
  isFormValid: boolean = false;

  ngOnInit() {
  }

  // m2pvaDP8TQTYXvecB
  //   email
  // : 
  // "E-mail"
  // message
  // : 
  // "Messages"
  // name
  // : 
  // "Ravikant"
  // subject
  // : 
  // "Main Subject"


  isFormValidCheck() {
    if(this.model.name && this.model.email && this.model.subject && this.model.message) {
      if(this.model.email.valid) {
        this.isFormValid = true;
      } 
    }
    else {
      this.isFormValid = false;
    }
  }

  async send() {
    emailjs.init('iQn4IwFoQv2AUS4p4');
    let response = await emailjs.send("service_u4frvxg", "template_bfew6bv", {
      from_name: this.model.name,
      to_name: "Ravikant Pandey",
      from_email: this.model.email,
      subject: this.model.subject,
      message: this.model.message,
      reply_to: this.model.email,
    });

    alert('Thank you for reaching out; I will get back to you as soon as possible!');
  }

}
