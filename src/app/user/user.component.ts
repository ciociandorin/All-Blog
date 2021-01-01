import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    gsap.to("#siteName", {
      left: 0,
      ease: "power4.inOut",
      duration: 1
    });
    
    gsap.from(".navBarEl", {
        opacity: 0,
        ease: "power4.inOut",
        duration: 0.7,
        delay: 0.5,
        stagger: 0.2
    });
  }

}
