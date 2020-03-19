import { Injectable } from "@angular/core";
import { Subject, Observable, Observer } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    constructor() {}

    private _subject: Subject<string>;

    public connect(url): Subject<string> {
        if (!this._subject) {
            this._subject = this.create(url);
            console.log(`Successfully connected: ${url}`);
        }
        return this._subject;
    }

    private create(url): Subject<string> {
        // let ws = new WebSocket(url);

        // // listen for messages from server
        // let observable = Observable.create((obs: Observer<string>) => {
        //     ws.onmessage = obs.next.bind(obs);
        //     ws.onerror = obs.error.bind(obs);
        //     ws.onclose = obs.complete.bind(obs);
        //     return ws.close.bind(ws);
        // });

        // let observer = {
        //     next: (data: Object) => {
        //         if (ws.readyState === WebSocket.OPEN) {
        //             ws.send(JSON.stringify(data));
        //         }
        //     }
        // };

        // return Subject.create(observer, observable);
        return null;
    }

}