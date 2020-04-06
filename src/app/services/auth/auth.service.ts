import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private _http: HttpClient) {}

    public login(user: User): void {
        // http get
    }

    public signup(user: User): void {
        // http post
    }

}
