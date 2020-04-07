import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthFormLogoComponent } from 'src/app/shared/components/auth-form-logo/auth-form-logo.component';
import { AuthFormComponent } from 'src/app/shared/components/auth-form/auth-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormType } from 'src/app/models/auth-form-enum.model';

@Component({
    template: `<connect-login></connect-login>`
})
class TestHostComponent {
}

describe('LoginComponent', () => {

    let testHostComponent: TestHostComponent;
    let loginComponent: LoginComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                FormsModule,
                MatInputModule,
                MatButtonModule,
                RouterTestingModule,
                BrowserAnimationsModule,
                HttpClientTestingModule
            ],
            declarations: [
                AuthFormLogoComponent,
                AuthFormComponent,
                LoginComponent,
                TestHostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
        loginComponent = fixture.debugElement.query(By.css('connect-login')).componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(testHostComponent).toBeTruthy();
        expect(loginComponent).toBeTruthy();
    });

    it('should initialize formType to login', () => {
        loginComponent.ngOnInit();

        expect(loginComponent.formType).toEqual(FormType.LOGIN);
    });

});
