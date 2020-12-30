import { Component, OnInit } from '@angular/core';
import { Post } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { NgForm } from '@angular/forms';
import { gsap } from 'gsap';

declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  constructor(public postService: PostService) { }

  model = {
    _id: '',
    comment: ''
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
  }

  fOn1():void {
    
    gsap.to("#rec1", {
      top: "-17px",
      ease: "power4.inOut",
      duration: 0.28
    });

    gsap.to("#rec2", {
        top: "0px",
        ease: "power4.inOut",
        duration: 0.28
    });

  }

  fOff1():void {

    gsap.to("#rec1", {
      top: "0px",
      ease: "power4.inOut",
      duration: 0.28
    });

    gsap.to("#rec2", {
        top: "17px",
        ease: "power4.inOut",
        duration: 0.28
    });

  }

  fOn2():void {
    
    gsap.to("#sub1", {
      top: "-17px",
      ease: "power4.inOut",
      duration: 0.28
    });

    gsap.to("#sub2", {
        top: "0px",
        ease: "power4.inOut",
        duration: 0.28
    });

  }

  fOff2():void {

    gsap.to("#sub1", {
      top: "0px",
      ease: "power4.inOut",
      duration: 0.28
    });

    gsap.to("#sub2", {
        top: "17px",
        ease: "power4.inOut",
        duration: 0.28
    });

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
      comment: ""
    }
  }

  // onSubmit(form: NgForm) {
  //   if (form.value._id == "") {
  //     this.postService.putComment(form.value).subscribe((res) => {
  //       this.resetForm(form);
  //       this.refreshPostList();
  //       M.toast({ html: 'Saved successfully', classes: 'rounded' });
  //     });
  //   }
  //   else {
  //     this.postService.putComment(form.value).subscribe((res) => {
  //       this.resetForm(form);
  //       this.refreshPostList();
  //       M.toast({ html: 'Updated successfully', classes: 'rounded' });
  //     });
  //   }
  // }

  onSubmit(_id: string, form: NgForm){
    form.value._id=_id;
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
