import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  posts: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
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
