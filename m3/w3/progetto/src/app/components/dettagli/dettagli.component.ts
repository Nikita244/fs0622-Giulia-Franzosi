import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interface/auth-response';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {

  film!: Movie | any;
  id!: number;
  films!: Movie[];

  token!: string | null;

  videoId! : string | null;


  constructor(private route: ActivatedRoute, private authSrv: AuthService, private domSanit: DomSanitizer) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.route.paramMap.subscribe(params => {
      let idstring = params.get("id");
      this.id = parseFloat(idstring!);
      this.authSrv.dettaglio(this.id).subscribe(res => {
        this.film = res;
      });
    });
  }


}
