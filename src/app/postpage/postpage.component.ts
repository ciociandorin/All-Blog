import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { NgForm } from '@angular/forms';
import { gsap } from 'gsap';
import { UserService } from '../shared/user.service';

declare var M: any;

@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.css']
})
export class PostpageComponent implements OnInit {

  postid ="";
  constructor(private router: ActivatedRoute, public postService: PostService, private userService: UserService) { }

  // comment form model
  model = {
    _id: '',
    comment: '',
    post_by: ''
  };

  userDetails: any;
  post : any;

  ngOnInit(): void {

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

    this.refreshPostList();
    this.resetForm();

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
  }

  // GET post (1 post)
  refreshPostList() {
    this.postService.getPost(this.router.snapshot.params.id).subscribe((res) => {
      this.post = res as Post[];
    }); 
  }

  // reset form
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.model = {
      _id: "",
      comment: "",
      post_by: ""
    }
  }

  // POST comment
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
