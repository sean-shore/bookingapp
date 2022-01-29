import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService} from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authUser: AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const authToken = this.authUser.getToken();
    console.log(authToken);
    if (authToken != null) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
    }
    return next.handle(req);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
