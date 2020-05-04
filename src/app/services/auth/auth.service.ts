import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _user: User = null;

    constructor(private _http: HttpClient,
                private _router: Router) {}

    public login(user: User): void {
        this._http.post('http://127.0.0.1:3000/api/user/login', user).subscribe(data => {
            this._user = this._jsonToUser(data);
            localStorage.setItem('user_id', this._user.id);
            localStorage.setItem('user_name', this._user.full_name);
            localStorage.setItem('user_email', this._user.email);
            localStorage.setItem('user_password', this._user.password);
            this._router.navigate(['home']);
        });
    }

    public signup(user: User): void {
        this._http.post('http://127.0.0.1:3000/api/user/signup', user).subscribe(data => {
            this._user = data['user_info'];
            this._router.navigate(['home']);
        });
    }

    private _jsonToUser(data: any): User {
        const user: User = {
            id: data.user_id,
            full_name: data.full_name,
            password: data.password,
            email: data.email
        };
        return user;
    }

    public getUser(): User {
        return this._user;
    }

}
