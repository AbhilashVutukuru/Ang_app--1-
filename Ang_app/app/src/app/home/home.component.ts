import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form:FormGroup = this.fb.group({
    from_name:'',
    to_name:'',
    from_email:'',
    message:''
    });
    constructor(private fb:FormBuilder){}
    async send(){
    let response = await emailjs.send("service_a38zqjr","template_znalhml",{
         from_name: "abhi",
         to_name: "test",
         from_email: "abhilashvutukuru@gmail.com",
         message: "this is message",
         });
    }

}
