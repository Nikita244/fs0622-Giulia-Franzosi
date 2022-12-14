import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Movie } from 'src/app/interface/auth-response';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() film!: Movie

  liked = false

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
    this.checkLike();
  }

  checkLike(){
    this.liked = this.authSrv.checkLike(this.film.id)
  }

  like() {
    this.authSrv.addPreferiti(this.film.id).subscribe((res)=>{
      this.liked = true
      console.log(res);

    })
  }

  dislike() {
    this.authSrv.rimuoviPreferiti(this.film.id).subscribe((res)=>{
      this.liked = false
      console.log(res);
    })
  }

  toggleLike() {
    if(this.liked) {
      this.dislike()
    } else {
      this.like()
    }
  }

}
