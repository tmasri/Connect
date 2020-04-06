import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user.model';
import { FormType } from 'src/app/models/auth-form-enum.model';

@Component({
    selector: 'connect-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formType: FormType;

  constructor(private _auth: AuthService) {}

  public ngOnInit(): void {
    this.formType = FormType.LOGIN;
  }

  public onLogin(user: User): void {
    this._auth.login(user);
  }

}
