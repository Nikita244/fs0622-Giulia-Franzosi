import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { RegisterRequest } from 'src/app/interface/auth-response';
import { catchError} from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err:string | undefined;

  constructor(private authSrv: AuthService, private r:Router) { }

  ngOnInit(): void {
  }

  register(f:NgForm):void{
    if(f.valid){
      let data : RegisterRequest = {
        nome: f.value.nome,
        email: f.value.email,
        password: f.value.password
      }

      console.log(data);

      this.authSrv.register(data).pipe(catchError(err=>{
        this.err = err.error
      throw err
      })).subscribe(res=>{
        console.log(res);
        this.err = undefined
        alert("Registrazione effettuata correttamente!");
        this.r.navigate([""])
      })
    }
  }
}
