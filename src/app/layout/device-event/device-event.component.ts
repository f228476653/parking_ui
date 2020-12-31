import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { interval } from 'rxjs/observable/interval';
import { map, tap, retryWhen, delayWhen } from 'rxjs/operators';
import { pipe } from 'rxjs/util/pipe';
import { SessionStorage } from '../../shared';
import { DeviceService } from '../../services/device.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-device-event',
  templateUrl: './device-event.component.html',
  styleUrls: ['./device-event.component.css']
})
export class DeviceEventComponent implements OnInit, OnDestroy {
  eventSource: EventSource;
  event: any;
  eventError: any;
  private subscription: Subscription;
  constructor(private _ngZone: NgZone, public deviceService: DeviceService, public sessionStorage: SessionStorage) {
      this.subscribeSSE();
  }

  ngOnInit() {
  }

  subscribeSSE() {
    this.subscription = this.deviceService.get_sse_device_event()
    .pipe(this.reConnectSSE())
    .subscribe((e) => {
      this._ngZone.run(() => {
          this.event = e;
          console.log(e);
      });
    });
  }

  reConnectSSE() {
    return pipe(
      retryWhen(errors => errors.pipe(
        tap(val => console.log(`server is gone or network issue`)),
        delayWhen(val => timer(3000))
      )
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
