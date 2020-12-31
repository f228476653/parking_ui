import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { SessionStorage } from './session-storage';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private sessionStorage: SessionStorage) {}

    canActivate() {
        if (this.sessionStorage.getIsLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
