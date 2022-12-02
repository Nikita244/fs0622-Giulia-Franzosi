import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { getUsers } from '../users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-users',
  template: `
    <div class="container mt-4">
      <ul class="list-group">
        <li [routerLink]="[user.id]" routerLinkActive="active" class="list-group-item" *ngFor="let user of users">
          {{user.name}}
        </li>
      </ul>
      <hr>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    li:hover{
      cursor:pointer ;
    }`
  ]
})
export class UsersPage implements OnInit {
  users!: Users[];

  constructor(private router: Router) {
    getUsers().then((users) => {
      this.users = users;
    });
   }

  ngOnInit(): void {
  }

}

