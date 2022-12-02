import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { getPosts, changeStatus} from '../posts.service';
import { Router } from '@angular/router';

@Component({
  template: `
    <div class="container mt-5 w-50">
      <div *ngFor="let post of posts; let i = index">
        <app-post-card *ngIf="post.active" [post]="post">
          <button (click)="onInactivePost(post.id,i,post)" class="btn btn-primary">Disattiva</button>
          <button class="btn btn-primary mx-1" [routerLink]="['/active-posts',post.id]" routerLinkActive="active">Dettagli</button>



        </app-post-card>
      </div>
    </div>
  `,
  styles: [],
})
export class ActivePostsPage implements OnInit {
  posts!: Post[];

  constructor() {
    getPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit():void {
  }

  onInactivePost(id:number, i:number, post:Post){
    /*updatePost({active:false},id)*/
    changeStatus(post)
    this.posts.splice(i,1)
  }

  /*showDetails(id:number){
    this.router.navigate(['/post-details'])
    console.log(id);

  }*/
}
