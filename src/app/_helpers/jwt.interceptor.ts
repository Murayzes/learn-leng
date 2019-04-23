import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.authService.currentUserValue; // or let
    if (currentUser && currentUser.token_refresh) {
      request = request.clone({
        setHeaders: {
          Auth: `Bearer ${currentUser.token_refresh}`
        }
      });
    }

    return next.handle(request);
  }
}
