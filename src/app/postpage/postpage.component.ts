import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postpage',
  templateUrl: './postpage.component.html',
  styleUrls: ['./postpage.component.css']
})
export class PostpageComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params);
  }

}
