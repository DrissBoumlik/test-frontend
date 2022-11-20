import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }
  
  getPosts() {
    return this.http.get('https://back.teacode.ma/api/posts')
      .subscribe((response: any) => {
        this.posts = response.posts;
        console.log(response);
      });
  }

}
