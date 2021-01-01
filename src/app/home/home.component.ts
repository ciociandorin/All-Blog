import { Component, OnInit } from '@angular/core';
import { Post, Comment } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { gsap } from 'gsap';
import { Router } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  userDetails: any;
  constructor(public postService: PostService, private router: Router) { }


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

    this.refreshPostList();

  }

  refreshPostList() {
    this.postService.getPostList().subscribe((res) => {
      this.postService.post = res as Post[];
    }); 
  }
}
