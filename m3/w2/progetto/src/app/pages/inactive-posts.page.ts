import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { getPosts, changeStatus } from '../posts.service';

@Component({
  template: `
  <div class="container mt-5 w-50">
    <div *ngFor="let post of posts; let i = index">
      <app-post-card [post]="post" *ngIf="!post.active" >
        <button (click)="onActivePost(post.id,i,post)" class="btn btn-primary">Attiva</button>
        <button class="btn btn-primary mx-1" [routerLink]="['/inactive-posts',post.id]" routerLinkActive="active">Dettagli</button>

      </app-post-card>
    </div>
  </div>
`,
  styles: [
  ]
})
export class InactivePostsPage implements OnInit {
  posts!: Post[];

  constructor() {
    getPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit():void {
  }

  onActivePost(id:number, i:number, post:Post){
    changeStatus(post)
    this.posts.splice(i,1)
  }

  /*showDetails(){
    this.router.navigate(['/post-details'])
  }*/
}
