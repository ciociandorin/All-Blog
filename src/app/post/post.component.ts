import { Post } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

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

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  model = {
    _id: '',
    title: '',
    description: '',
    post_by: ''
  };

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

  async refreshPostList() {
    await this.delay(1000);
    this.postService.getUserPostList(this.userDetails.username).subscribe((res) => {
      this.postService.post = res as Post[];

    });
  }

  onEdit(post: Post) {
    this.model = post;
  }

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


