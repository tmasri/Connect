import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class DeviceIdentifierService {

    private _deviceIdentity: string = '';

    constructor() {
    }

    public createIdentity(user: User): void {
        // send a request to the server and receive a key identifier
        // save key identifier
    }

    public getIdentity(): string {
        return this._deviceIdentity;
    }

}
