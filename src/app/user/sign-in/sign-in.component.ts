import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { gsap } from 'gsap';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private router : Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string | undefined;

  ngOnInit(): void {

    gsap.to("#first", {
      height: "100%",
      ease: "power4.inOut",
      duration: 1
    });
  
    gsap.to("#second", {
        height: "100%",
        ease: "power4.inOut",
        duration: 1,
        delay: 0.1
    });
    
    gsap.to("#third", {
        height: "100%",
        ease: "power4.inOut",
        duration: 1,
        delay: 0.2
    });
    
    gsap.to("#loginWrapper", {
        opacity: 1,
        ease: "power4.inOut",
        duration: 1,
        delay: 0.8
    });

    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/home');
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
  
    gsap.to("#loginBtn", {
      backgroundColor: "#3470be",
      ease: "power4.inOut",
      duration: 0.28
    });

  }

  btnOff():void {
  
    gsap.to("#loginBtn", {
      backgroundColor: "#438ef1",
      ease: "power4.inOut",
      duration: 0.28
    });

  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/home');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
