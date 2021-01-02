import { Post } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

declare var M: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  
  userDetails: any;
  constructor(public postService: PostService, private userService: UserService, private router: Router) { }

  async ngOnInit(): Promise<void> {

    // gsap animation
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

    gsap.from("#left", {
      top: "100%",
      ease: "power4.inOut",
      duration: 1
    });

    gsap.from("#right", {
      height: "0%",
      ease: "power4.inOut",
      duration: 1
    });

    gsap.from(".stagger", {
      opacity: "0",
      ease: "power4.inOut",
      duration: 0.5,
      stagger: 0.15,
      delay: 0.7
    });

    gsap.from("table", {
      opacity: "0",
      ease: "power4.inOut",
      duration: 0.5,
      delay: 0.7
    });

    // GET user data
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(this.userDetails);
      },
      err => {
        console.log(err);
      }
      
    );

    this.resetForm();
    this.refreshPostList(); 

  }

  // delay function
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  // post form model
  model = {
    _id: '',
    title: '',
    description: '',
    post_by: ''
  };
  
  // reset form
  async resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.model = {
      _id: "",
      title: "",
      description: "",
      post_by: ""
    }
  }

  // POST post / UPDATE post
  onSubmit(form: NgForm) { 
    form.value.post_by=this.userDetails.username;
    console.log(form.value.post_by)
    if (form.value._id == "") {
      this.postService.postPost(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPostList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.postService.putPost(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPostList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  // GET all user posts
  async refreshPostList() {
    await this.delay(1000);
    this.postService.getUserPostList(this.userDetails.username).subscribe((res) => {
      this.postService.post = res as Post[];

    });
  }

  // put data in form for UPDATE
  onEdit(post: Post) {
    this.model = post;
  }

  // DELET post
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.postService.deletePost(_id).subscribe((res) => {
        this.refreshPostList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}