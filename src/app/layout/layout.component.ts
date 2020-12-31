import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router, NavigationEnd } from '@angular/router';
import { SessionStorage, MenuPermission} from '../shared/index';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
    private _mobileQueryListener: () => void;
    mobileQuery: MediaQueryList;
    fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);
    opened = true;
    isActive = false;
    showMenu = '';
    isHideMenu = false;
    pushRightClass = 'push-right';
    login_user_name = '';
    sideNavMode = 'side';
    step: boolean;
    avalible_permission = [];
    version = environment.version;

    setStep(index: boolean) {
        this.step = index;
    }

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public router: Router, public sessionStorage: SessionStorage) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.login_user_name = (this.sessionStorage.getUserName() || this.sessionStorage.getAccount());
    }

    ngOnInit() {
        this.checkAvailiblePermission();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    checkAvailiblePermission() {
        for ( const x of this.sessionStorage.getRolePermission()) {
            MenuPermission.getPermission().forEach( w => {
                if ( w.id === x.permission_id) {
                    this.avalible_permission.push(w);
                }
            });
        }
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    onLoggedout() {
      this.sessionStorage.clear();
        this.router.navigate(['login']);
    }
    checkPermission(menu_key: string): boolean {
       return this.avalible_permission.findIndex( x => x.menu_key === menu_key) > -1;
    }
}
