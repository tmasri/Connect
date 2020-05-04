import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
        let values: User;
        if (this.type === FormType.LOGIN) {
            values = {
                id: '',
                email: 'tareq@gmail.com', //this.email,
                password: '123', //this.password
            };
        } else {
            values = {
                id: '',
                full_name: this.name,
                email: this.email,
                password: this.password
            };
        }

        this.values.emit(values);
    }

}
