import {Injectable} from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = this.authenticationService.currentUserValue ?
      req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.authenticationService.currentUserValue.access_token
        }
      })
        : req;
    return next.handle(request);
  }
}
