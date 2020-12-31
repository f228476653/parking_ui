import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements AfterViewInit {

  breadcrumbs: string[] = [];
  constructor( private router: Router) {
  }

  ngAfterViewInit(): void {
    const bc = this.breadcrumbs;
    this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
            const url = evt.url;
            if (url === '' || url === '/') {
                bc.length = 0;
            } else {
              bc.pop();
              bc.push(evt.url.substr(1));
            }
        }
    });
  }

}
