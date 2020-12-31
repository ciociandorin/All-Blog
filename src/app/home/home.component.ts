import { Component, OnInit } from '@angular/core';
import { Post, Comment } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { NgForm } from '@angular/forms';
import { gsap } from 'gsap';
import { UserService } from '../shared/user.service';
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
  constructor(public postService: PostService, private userService: UserService, private router: Router) { }

  model = {
    _id: '',
    comment: '',
    post_by: ''
  };

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
    this.resetForm();

    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(this.userDetails);
      },
      err => { 
        console.log(err);
      }
    ); 
  }

  refreshPostList() {
    this.postService.getPostList().subscribe((res) => {
      this.postService.post = res as Post[];
    }); 
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.model = {
      _id: "",
      comment: "",
      post_by: ""
    }
  }

  onSubmit(_id: string, form: NgForm){
    form.value.post_by=this.userDetails.username;
    form.value._id=_id;
    console.log(form.value._id);
    console.log(form.value);
    if (form.value._id == "") {
      this.postService.putComment(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPostList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.postService.putComment(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPostList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }
}
