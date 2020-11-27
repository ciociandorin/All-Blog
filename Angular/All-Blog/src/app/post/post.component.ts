import { Post } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  

  constructor(public postService: PostService) { }

  model = {
    _id: '',
    title: '',
    description: ''
  };

  ngOnInit(): void {
    this.resetForm();
    this.refreshPostList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.model = {
      _id: "",
      title: "",
      description: ""
    }
  }

  onSubmit(form: NgForm) {
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

  refreshPostList() {
    this.postService.getPostList().subscribe((res) => {
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


