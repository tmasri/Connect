import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

const URL = '';

@Injectable({
    providedIn: 'root'
})
export class ConnectService {
    public links: Subject<string>;

    constructor(private socketService: WebsocketService) {
        // this.socketService.connect(URL).subscribe(data  => {
        //     console.log(data)
        // });
    }
}