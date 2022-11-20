import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  user_id = null;
  posts: any = [];

  constructor(private actRoute: ActivatedRoute,
          private http: HttpClient) {
    this.user_id = this.actRoute.snapshot.params['user_id'];
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    return this.http.get(`${environment.apiURL}/users/${this.user_id}/posts`)
      .subscribe((response: any) => {
        this.posts = response.posts;
        console.log(response);
      });
  }
}
