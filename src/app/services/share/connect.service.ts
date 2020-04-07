import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { LinkRecieved } from 'src/app/models/link.model';
import { SendLink } from 'src/app/models/send-link.model';

const URL = '';

@Injectable({
    providedIn: 'root'
})
export class ConnectService {
    private _links: Subject<LinkRecieved> = new Subject();

    constructor(private socketService: WebsocketService) {
        // this.socketService.connect(URL).subscribe(data  => {
        //     console.log(data)
        // });
    }

    public getLink(): void {
        const recieved: LinkRecieved = { id: '1', link: 'https://www.google.ca' };
        // you might have to add a pipe to map, depends on how backend sends back data
        this._links.next(recieved);
    }

    public linkRecieved(link: SendLink): void {
        // send link to server
    }

    public getLinkListener(): Observable<LinkRecieved> {
        return this._links.asObservable();
    }
}
