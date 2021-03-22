import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private _storageService: StorageService,
    private _router: Router,
  ) {}

  canActivate() {
    if ( this._storageService.getCurrentUser() ) return true;
    else {
      this._router.navigate(['']);
      return false;
    }
  }
  
}
