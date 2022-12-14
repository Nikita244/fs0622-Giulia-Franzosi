import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


   user: { email:string, nome:string, id:number} | undefined;
   constructor(private authSrv:AuthService) { }

   ngOnInit(): void {
    this.authSrv.getLoggedObs().subscribe(res =>{
      if (res){
        this.user = res
      } else {
        this.user = undefined
      }

    })
   }

   logout(){
    this.authSrv.logout()

  }
 }


