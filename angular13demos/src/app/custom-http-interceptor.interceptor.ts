import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, retry, throwError } from 'rxjs';

@Injectable()
export class CustomHttpInterceptorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //Add a Auth Token
    const token = '123sds3-232-2323-sdd-t5-t43-f3f33f'
    const reqWithAuth = request.clone({
      setHeaders:{
        Authorization : `Bearer ${token}`
      }
    });
    return next.handle(reqWithAuth)
               .pipe(
                 //Retry on failures
                 retry(2),

                 //Handle Errors
                 catchError((error: HttpErrorResponse)=>{
                  alert(`Http Error: ${request.url}`)
                  return throwError(error);
                 }),
                   finalize(()=>{
                    console.log(`${request.method} ${request.urlWithParams}`)
                   })
                 );
  }
}
