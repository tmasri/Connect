import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private _http: HttpClient) {}

    public login(user: User): void {
        // this._http.post('/login', user).subscribe(data => {
        // });
    }

    public signup(user: User): void {
    }

}
