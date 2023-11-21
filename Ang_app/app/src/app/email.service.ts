import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {}

  sendEmail(email: string, subject: string, message: string) {
    const params = {
      to_email: email,
      email_subject: subject,
      email_message: message,
    };

    emailjs.send('service_a38zqjr', 'template_znalhml', params, 'Suag0s76EtyAIXCVT')
      .then(response => {
        console.log('Email sent', response);
      })
      .catch(error => {
        console.error('Email could not be sent:', error);
      });
  }
}

