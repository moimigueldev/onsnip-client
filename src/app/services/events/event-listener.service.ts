import { Injectable, NgZone } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as io from 'socket.io-client';
import { urlRoutes } from '../../../assets/keys';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class EventListenerService {


  constructor(
    private socket: Socket
  ) { }

  ngOnInit() {

  }

  listen(eventName: string) {
    console.log('listeing')

    return this.socket.fromEvent(eventName)



  }

  emit(eventName: string, data: any) {
    console.log('emitting')
    this.socket.emit(eventName, data)
  }

}
