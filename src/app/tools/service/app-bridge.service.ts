import { Injectable } from '@angular/core';

import { AppBridge } from 'novo-elements';

import { environment } from '../../../environments/environment';
import { ClosableAppBridge } from './closable-app-bridge';
import {Observable} from 'rxjs';
import { from } from 'rxjs';
@Injectable()
export class AppBridgeService {

  private bridge: ClosableAppBridge = new ClosableAppBridge(environment.appBridgeConfig.title);

  private registered = false;

  constructor() {
    this.bridge.tracing = true;
    this.register();
  }

  public execute(execute: (bridge: AppBridge) => void) {
    if (this.registered) {
      execute(this.bridge);
    } else {
      const interval = setInterval(() => {
        if (this.registered) {
          clearInterval(interval);

          execute(this.bridge);
        }
      }, 500);
    }
  }

  public promise(): Promise<AppBridge> {
    if (this.registered) {
      return Promise.resolve(this.bridge);
    } else {
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          if (this.registered) {
            clearInterval(interval);

            resolve(this.bridge);
          }
        }, 500);
      });
    }
  }

  public subscription(): Observable<AppBridge> {
    return from(this.promise());
  }



  private register() {
    this.bridge.register(environment.appBridgeConfig).then(() => {
      this.registered = true;
    }, () => {
      setTimeout(() => {
        this.register();
      }, 500);
    });
  }

}
