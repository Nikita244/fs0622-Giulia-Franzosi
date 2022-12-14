import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, ReplaySubject, Subject, tap } from 'rxjs';
import { AuthResponse, favMovie, LoginRequest, Movie, RegisterRequest } from './interface/auth-response';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private authSubj = new BehaviorSubject<null | AuthResponse>(null);
  user$ = this.authSubj.asObservable();

  registerUrl = "http://localhost:4201/register"
  loginUrl = "http://localhost:4201/login"

  loggedSubj = new ReplaySubject<false | AuthResponse["user"]>();


  constructor(private http: HttpClient) { }




  register(data: RegisterRequest) {
    return this.http.post(this.registerUrl, data).pipe(catchError(err => {
      console.log(err);
      throw err;
    }))
  }

  login(data: LoginRequest) {
    return this.http.post<AuthResponse>(this.loginUrl, data).pipe(catchError(err => {
      console.log(err);
      throw err;
    }), tap((res) => {
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("email", res.user.email);
      localStorage.setItem("nome", res.user.nome);
      localStorage.setItem("id", res.user.id.toString());



      this.loggedSubj.next(res.user)
    }))
  }

  recuperaFilm() {
    let token = localStorage.getItem("token")

    return this.http.get<Movie[]>('http://localhost:4201/api/movie/popular', {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
  }

  logout() {
    localStorage.removeItem("token")
    this.loggedSubj.next(false)
  }

  getLoggedObs() {
    return this.loggedSubj.asObservable()
  }

  dettaglio(id: number) {
    console.log(id);
    let token = localStorage.getItem("token")

    return this.http.get<Movie[]>('http://localhost:4201/api/movie/popular/' + id, {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
  }

  recuperaPreferiti() {
    let user = localStorage.getItem("id")
    let token = localStorage.getItem("token")

    return this.http.get<favMovie[]>(`http://localhost:4201/favorites?userId=${user}`, {
      headers: {
        "Authorization": "Bearer " + token
      }
    }).pipe(tap((res) => {
      this.preferiti = res

    }))
  }

  addPreferiti(movieId:number){
    let user = localStorage.getItem("id")
    let token = localStorage.getItem("token")

    let body :  favMovie = {
      movieId: movieId,
      userId: parseInt(user!)
    }

    return this.http.post<favMovie>(`http://localhost:4201/favorites`, body,  {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
  }

  rimuoviPreferiti(idFilm:number){
    let user = localStorage.getItem("id")
    let token = localStorage.getItem("token")
    let x = this.preferiti.find((v) => {
      if (v.movieId == idFilm && v.userId == parseInt(user!)) {
        return true
      }
      return false
    })
    let idPref = x!.id

    return this.http.delete<undefined>(`http://localhost:4201/favorites/${idPref}`, {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
  }

  like() { }

  dislike() { }

  preferiti: favMovie[] = []

  checkLike(idFilm: number): boolean {
    let idUtente: string | number | null = localStorage.getItem("id")
    if (idUtente == null) {
      return false
    } else {
      idUtente = parseInt(idUtente)
    }

    let x = this.preferiti.some((v) => {
      if (v.movieId == idFilm && v.userId == idUtente) {
        return true
      }
      return false
    })
    if (x == true) {
      return true
    } else {
      return false
    }
  }


}
