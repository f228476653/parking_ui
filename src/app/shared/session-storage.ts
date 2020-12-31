import { Injectable } from '@angular/core';
import { MapRolePermission } from '.';



@Injectable()
export class SessionStorage {
    constructor() {

    }
    public hasToken() {
        const r = this.getToken() ? true : false;
        return r;
    }
    public clear() {
        window.sessionStorage.clear();

        window.sessionStorage.removeItem('a');
        window.sessionStorage.removeItem('b');
        window.sessionStorage.removeItem('c');
        window.sessionStorage.removeItem('d');
        window.sessionStorage.removeItem('e');
        window.sessionStorage.removeItem('f');
        window.sessionStorage.removeItem('g');
        window.sessionStorage.removeItem('h');
        window.sessionStorage.removeItem('i');
        window.sessionStorage.removeItem('j');
        window.sessionStorage.removeItem('k');
    }

    public getRolePermission() {
        const w = window.sessionStorage.getItem('j') ? JSON.parse(window.sessionStorage.getItem('j')) : null;
        return w;
    }
    public setRolePermission(role_permission) {
        window.sessionStorage.setItem('j', JSON.stringify(role_permission));
    }

    public getToken(): string {
        const w = window.sessionStorage.getItem('a') ?  window.sessionStorage.getItem('a') : '';
        return w;
    }

    public setToken(token: string) {
        window.sessionStorage.setItem('a', token);
    }

    public setUserName(user_name: string) {
        window.sessionStorage.setItem('b', user_name);
    }

    public getUserName(): string {
        return window.sessionStorage.getItem('b');
    }

    public getAccount(): string {
        return window.sessionStorage.getItem('c');
    }
    public setAccount(account: string) {
        window.sessionStorage.setItem('c', account);
    }

    public getAccountId(): string {
        return window.sessionStorage.getItem('d');
    }
    public setAccountId(id: string) {
        window.sessionStorage.setItem('d', id);
    }

    public setIsLoggedIn(isLoggedin: boolean) {
        window.sessionStorage.setItem('e', String(isLoggedin));
    }

    public getIsLoggedIn(): boolean {
        return Boolean(window.sessionStorage.getItem('e'));
    }

    public getIsRememberMe(): boolean {
        return Boolean(window.sessionStorage.getItem('f'));
    }

    public setIsRememberMe(isRememberMe: boolean) {
        window.sessionStorage.setItem('f', String(isRememberMe));
    }

    public setIsSuperUser(isSuperUser: boolean) {
        window.sessionStorage.setItem('h', String(isSuperUser));
    }

    public getIsSuperUser(): boolean {
        return window.sessionStorage.getItem('h') === 'true' ? true : false;
    }

    public setCustomerId(customer_id: number) {
        window.sessionStorage.setItem('i', String(customer_id));
    }

    public getCustomerId(): number {
        return window.sessionStorage.getItem('i') === 'null' ? null : Number(window.sessionStorage.getItem('i'));
    }

    public setIsCustomerRoot(isCustomerRoot: boolean) {
        window.sessionStorage.setItem('k', String(isCustomerRoot));
    }

    public getIsCustomerRoot(): boolean {
        return window.sessionStorage.getItem('k') === 'true' ? true : false;
    }

}
