import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LoginRequest } from 'src/app/interface/auth-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder, private authSrv: AuthService, private r:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [],
      password: []
    })
  }

  login() {
    if (this.form.valid) {
      let data: LoginRequest = {
        email: this.getFormControl('email').value,
        password: this.getFormControl('password').value
      }
      console.log(data);
      this.authSrv.login(data).subscribe(res => {
        this.r.navigate(['/home'])
      })
    }
  }

  getFormControl(n: string) {
    return this.form.get(n) as FormControl
  }

}
