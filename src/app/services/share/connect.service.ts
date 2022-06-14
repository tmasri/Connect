import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { LinkRecieved } from 'src/app/models/link.model';
import { SendLink } from 'src/app/models/send-link.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { User } from 'src/app/models/user.model';
import { Socket } from 'ngx-socket-io';

const URL = '';

@Injectable({
    providedIn: 'root'
})
export class ConnectService {
    private _links: Subject<LinkRecieved> = new Subject();
    private _user: User = null;
    currentLink = this.socket.fromEvent<LinkRecieved>('link');
    documents = this.socket.fromEvent<string[]>('links');

    constructor(
        private socketService: WebsocketService,
        private _http: HttpClient,
        private _auth: AuthService,
        private socket: Socket) {
        // this.socketService.connect(URL).subscribe(data  => {
        //     console.log(data)
        // });
    }

    public getLinkSocket(): void {
        this.socket.emit('/api/link/get', localStorage.getItem('user_id'));
    }

    public removeLinkSocket(link: LinkRecieved): void {
        this.socket.emit('/api/link/delete', link);
    }

    public getLink(): void {
        this._http.get('http://127.0.0.1:3000/api/link/get/' + localStorage.getItem('user_id')).subscribe(linkReceived => {
            const recieved: LinkRecieved = this._jsonToLink(linkReceived);
            this._links.next(recieved);
        });
    }

    public linkRecieved(link: SendLink): void {
        this._http.post('http://127.0.0.1:3000/api/link/delete', link).subscribe(response => {
            console.log(response);
        });
    }

    public sendLink(link: SendLink): void {
        this._http.post('http://127.0.0.1:3000/api/link/send', link).subscribe(response => {
            console.log(response);
        });
    }

    public getLinkListener(): Observable<LinkRecieved> {
        return this._links.asObservable();
    }

    private _jsonToLink(data: any): LinkRecieved {
        const link: LinkRecieved = {
            id: data.shared_id,
            link: data.shared_value
        };
        return link;
    }

    private _getUser(): void {
        this._user = this._auth.getUser();
    }
}
