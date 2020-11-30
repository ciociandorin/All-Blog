import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { gsap } from 'gsap';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userDetails: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    gsap.to("#siteName", {
      left: 0,
      ease: "power4.inOut",
      duration: 1
    });

    gsap.to("#first", {
      top: "40%",
      height: "60%",
      ease: "expo.inOut",
      duration: 2,
      delay: 0.6
    });

    gsap.to("#second", {
      top: "40%",
      height: "60%",
      ease: "expo.inOut",
      duration: 2,
      delay: 0.8
    });

    gsap.from("#title", {
      top: "100px",
      ease: "expo.inOut",
      duration: 1.7
    });

    gsap.from("#username", {
      top: "100px",
      ease: "expo.inOut",
      duration: 1.7,
      delay: 0.3
    });

    gsap.from("#email", {
      top: "100px",
      ease: "expo.inOut",
      duration: 1.7,
      delay: 0.5
    });

    

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );

  }

  btnOn():void {

    gsap.to("#logoutWrapper", {
      backgroundColor: "white",
      // ease: "expo.inOut",
      duration: 0.3
    });
  
    gsap.to("#logout1", {
      top: "-90%",
      ease: "expo.inOut",
      duration: 0.3,
      color: "black"
    });

    gsap.to("#logout2", {
      top: "0%",
      ease: "expo.inOut",
      duration: 0.3,
      color: "black"
    });

  }

  btnOff():void {

    gsap.to("#logoutWrapper", {
      backgroundColor: "black",
      // ease: "expo.inOut",
      duration: 0.3
    });
  
    gsap.to("#logout1", {
      top: "0%",
      ease: "expo.inOut",
      duration: 0.3,
      color: "white"
    });

    gsap.to("#logout2", {
      top: "80%",
      ease: "expo.inOut",
      duration: 0.3,
      color: "white"
    });

  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
