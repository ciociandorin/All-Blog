import { Component, OnInit } from '@angular/core';
import { Post } from './../shared/post.model';
import { PostService } from './../shared/post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.refreshPostList();
  }

  refreshPostList() {
    this.postService.getPostList().subscribe((res) => {
      this.postService.post = res as Post[];
    });
  }

}
