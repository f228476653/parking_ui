import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


/**
 * base class for service
 */
@Injectable()
export class ServicebaseService {
  constructor() {
  }
  public handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

