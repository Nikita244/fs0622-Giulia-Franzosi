import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  constructor(private authSrv: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authSrv.user$.pipe(take(1), switchMap(user => {
      if (!user) {
        return next.handle(req)

      }
      const newReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${user.accessToken}`)
      })
      return next.handle(newReq)
    }));
  }
}
