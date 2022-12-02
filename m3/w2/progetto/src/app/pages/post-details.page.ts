import { Post } from '../models/post';
import { ActivatedRoute } from '@angular/router';
import { ActivePostsPage } from './active-posts.page';
import { Component, OnInit } from '@angular/core';
import { getPosts, getPostsById } from '../posts.service';

@Component({
  selector: 'app-post-details',
  template: `

    <div class="container mt-5 ms-5">
      <div class="card-body">
        <h3 class="card-title mb-3">{{ post.title }}</h3>
        <p class="card-text">{{ post.body }}</p>
        <p class="card-text">Autore: {{ post.author }}</p>
        <!--
        <p class="card-text">Stato: {{ post.active}}</p>
-->
        <p class="card-text">Categoria: {{ post.type }}</p>

        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class PostDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute) {}
  post!: Post | any;

  id!: number;
  posts!: Post[];

  async ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = Number(param.id);
    });
    const posts = await getPosts();
    this.posts = posts;

    this.post = await getPostsById(posts, this.id);
  }

}
