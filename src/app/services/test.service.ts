import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class TestService {
  public counterStore$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public test: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  count: Observable<number> = this.counterStore$;
  constructor() {
  }

  setInitialCounter(initialCounter: number) {
    console.log('init' + initialCounter);
    this.counterStore$.next(initialCounter);
  }

  add1() {
    console.log('add');
    this.counterStore$.next(this.counterStore$.getValue() + 1);
  }

  minus1() {
    console.log('mine');
    this.counterStore$.next(this.counterStore$.getValue() - 1);
  }

}
