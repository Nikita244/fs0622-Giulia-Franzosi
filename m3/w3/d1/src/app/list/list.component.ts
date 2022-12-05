import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  photos:Photo[]=[]

  photoSub!: Subscription

  error = false

  constructor(private ps: PhotoService) { }

  ngOnInit(): void {
    this.photoSub = this.getPhotos()
  }

  getPhotos(){
    return this.ps.getDataObs().subscribe((res)=>{
      if(res) this.photos = this.ps.getPhotos()
      else this.error = true
    })
  }

  ngOnDestroy() {
    this.photoSub.unsubscribe()
  }

}
