import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthFormComponent } from './auth-form.component';
import { FormType } from 'src/app/models/auth-form-enum.model';
import { User } from 'src/app/models/user.model';
import { AuthFormLogoComponent } from '../auth-form-logo/auth-form-logo.component';
import { NgModel, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventEmitter } from 'protractor';

@Component({
    template: `<connect-auth-form></connect-auth-form>`
})
class TestHostComponent {
    public type: FormType;

    public onSubmit(event: User): void {
    }
}

describe('AuthForm', () => {

    let fixture: ComponentFixture<TestHostComponent>;
    let testHostComponent: TestHostComponent;
    let authForm: AuthFormComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                FormsModule,
                MatInputModule,
                MatButtonModule,
                RouterTestingModule,
                BrowserAnimationsModule
            ],
            declarations: [
                AuthFormComponent,
                AuthFormLogoComponent,
                TestHostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
        authForm = fixture.debugElement.query(By.css('connect-auth-form')).componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {

        expect(testHostComponent).toBeTruthy();
        expect(authForm).toBeTruthy();
    });

    it('should initialize values', () => {
        authForm.ngOnInit();

        expect(authForm.name).not.toBeNull();
        expect(authForm.email).not.toBeNull();
        expect(authForm.password).not.toBeNull();
    });
});
