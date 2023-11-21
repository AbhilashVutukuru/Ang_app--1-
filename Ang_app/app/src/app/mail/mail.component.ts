import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; 
import { NgForm } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent{

  
successMessage: string = '';
showFieldErrors: boolean = false;
form:FormGroup = this.fb.group({
  from_name:'',
  to_name:'',
  from_email:'',
  message:'',

  });
  employeeForm: FormGroup;
  isCharacterLimitExceeded: boolean = false;
  constructor(private fb:FormBuilder){
    this.employeeForm = this.fb.group({
      message: ''
    });
  }
 
  async send(){
    emailjs.init('Suag0s76EtyAIXCVT')
  let response = await emailjs.send("service_a38zqjr","template_znalhml",{
       from_name: this.form.value.from_name,
       to_name: "Admin",
       from_email: this.form.value.from_email,
       message: this.form.value.message,
       });
      //  alert('Message sent successfully')
       this.form.reset();
  }

  checkCharacterLimit() {
    const messageControl = this.form.get('message');
  if (messageControl) {console.log(messageControl.value.length)
    if (messageControl.value.length > 99) {console.log('abhi')
      this.isCharacterLimitExceeded = true;
    } else {console.log('sai')
      this.isCharacterLimitExceeded = false;
    }
  }
  }
  submit() {
    if (this.form.valid) {
    this.successMessage = 'Sucess';
    this.showFieldErrors = false;
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
}

}

// emailjs.send("service_a38zqjr","template_znalhml",{
//   from_name: "abhi",
//   to_name: "test",
//   from_email: "abhilashvutukuru@gmail.com",
//   message: "this is message",
//   });
