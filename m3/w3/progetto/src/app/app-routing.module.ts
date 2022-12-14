import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [

  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"user",
    component:UserComponent,
    canActivate : [AuthGuard]
  },
  {
    path: ":id",
    component: DettagliComponent
  },
  {
    path: '**',
    component: LoginComponent,

  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
