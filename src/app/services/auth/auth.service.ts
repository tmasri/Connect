import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private user: User = { id: '1', email: 'tareq@gmail.com' }; // null;

    constructor(private _http: HttpClient,
                private _router: Router) {}

    public login(user: User): void {
        // this._http.post('/login', user).subscribe(data => {
        // });
        this.user = user;
        this._router.navigate(['home']);
    }

    public signup(user: User): void {
        this.user = user;
        this._router.navigate(['home']);
    }

    public getUser(): User {
        return this.user;
    }

}
