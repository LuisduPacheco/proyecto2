import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('user')) 
    {
      let user = JSON.parse(String(localStorage.getItem('user')))
      if(user.autenticado) return true
      else{
        this.router.navigate(['login'])
        return false;
      }
    }
    else{
      this.router.navigate(['login'])
      return false;
    }
  }
  
}
