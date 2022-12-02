import { Component, OnInit } from '@angular/core';
import { getUsers } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';
import { getUsersById } from '../users.service';

@Component({
  selector: 'app-user-details',
  template: `

    <p class="card-text">Nome utente: {{ user.name }}</p>
    <p class="card-text">Email: {{ user.email }}</p>
    <p class="card-text">Ruolo: {{ user.role }}</p>

  `,
  styles: [
  ]
})
export class UsersDetailsPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  user!: Users | any

  id!: number;


  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.id = Number(param.id);
      this.recuperaUtente(this.id)
    });
  }

  async recuperaUtente(id:number){
    this.user! = await getUsersById(id!);
  }

}
