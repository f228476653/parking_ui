import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';


import { Router } from '@angular/router';
import { SessionStorage } from '../shared/index';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';

/**
 * a baisc authoriation interceptor service.
 * note : we also add content type as json here.
 */
@Injectable()
export class JwtAuthInterceptorService implements HttpInterceptor {
  constructor(public router: Router, public sessionStorage: SessionStorage) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const headers: HttpHeaders = new HttpHeaders(
    { 'Authorization': (this.sessionStorage.getToken())
      , 'Content-Type': 'application/json; charset=utf-8'
    });
  const authReq = req.clone({
      headers: headers
    });
    return next.handle(authReq).pipe(
      map(event => {
          return event;
      }), catchError( error => {
        if ( error instanceof HttpErrorResponse) {
          if (error.status === 403) {
            this.sessionStorage.clear();
            this.router.navigate(['./login']);
          }
        }
        return throwError(error);
      })
  );

  }
}
