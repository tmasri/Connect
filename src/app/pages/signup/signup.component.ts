import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FormType } from 'src/app/models/auth-form-enum.model';

@Component({
    selector: 'connect-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    public formType: FormType;

    constructor(private _auth: AuthService) {}

    public ngOnInit(): void {
        this.formType = FormType.SIGNUP;
    }

    public onSignup(user: User): void {
        this._auth.signup(user);
      }

}
