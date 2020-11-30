import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { gsap } from 'gsap';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean | undefined;
  serverErrorMessages: string | undefined;
  constructor( public userService: UserService) { }

  ngOnInit(): void {

    gsap.to("#first", {
      height: "100%",
      top: "0%",
      ease: "power4.inOut",
      duration: 1
    });
  
    gsap.to("#second", {
        height: "100%",
        ease: "power4.inOut",
        duration: 1
    });
    
    gsap.to("#third", {
        height: "100%",
        top: "0%",
        ease: "power4.inOut",
        duration: 1
    });

    gsap.to("#registerWrapper", {
      opacity: 1,
      ease: "power4.inOut",
      duration: 1,
      delay: 0.8
    });
  
  }

  funct1():void {
  
    gsap.to("#pass1", {
        top: "-21px",
        ease: "power4.inOut",
        duration: 0.28
    });

    gsap.to("#pass2", {
        top: "0px",
        ease: "power4.inOut",
        duration: 0.28
    });

  }

  funct2():void {
  
    gsap.to("#pass1", {
      top: "0px",
      ease: "power4.inOut",
      duration: 0.28
    });

    gsap.to("#pass2", {
      top: "18px",
      ease: "power4.inOut",
      duration: 0.28
    });

  }

  btnOn():void {
  
    gsap.to("#signupBtn", {
      backgroundColor: "#5c7870",
      ease: "power4.inOut",
      duration: 0.28
    });

  }

  btnOff():void {
  
    gsap.to("#signupBtn", {
      backgroundColor: "#7AA095",
      ease: "power4.inOut",
      duration: 0.28
    });

  }

  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong. Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      username: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
