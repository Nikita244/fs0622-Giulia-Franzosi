import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
  <div class="container text-center my-5">
  <h1><span appSfondo>Benvenuto</span> sulla home page</h1>
  </div>
  <div class=" mt-5 d-flex  justify-content-around">

    <button (click)="gotoActivePosts()" class="btn btn-primary" >Vai a post attivi</button>
    <button (click)="gotoInactivePosts()" class="btn btn-primary" >Vai a post non attivi</button>
  </div>
  `,
  styles: [
  ]
})
export class HomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoInactivePosts(){
    this.router.navigate(['/inactive-posts'])
  }
  gotoActivePosts(){
    this.router.navigate(['/active-posts'])
  }

}
