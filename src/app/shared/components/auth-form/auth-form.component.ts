import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormType } from 'src/app/models/auth-form-enum.model';
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'connect-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

    public name: string;
    public email: string;
    public password: string;

    @Input() public type: FormType;
    @Output() public values: EventEmitter<User> = new EventEmitter<User>();

    constructor() {
    }

    public ngOnInit(): void {
        this.name = '';
        this.email = '';
        this.password = '';
    }

    public submit(): void {
        const values: User = {
            email: this.email,
            password: this.password
        };

        this.values.emit(values);
    }

}