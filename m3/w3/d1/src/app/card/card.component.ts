import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() photo:Photo|undefined

  @Input() error=false

  constructor(private ps: PhotoService ) { }

  ngOnInit(): void {
  }

  elimina() {
    if(this.photo != undefined) {
      this.ps.delete(this.photo.id)
    } else {
      console.log("else");
    }
  }

}
