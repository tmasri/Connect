import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthFormLogoComponent } from 'src/app/shared/components/auth-form-logo/auth-form-logo.component';
import { AuthFormComponent } from 'src/app/shared/components/auth-form/auth-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SignupComponent } from './signup.component';
import { FormType } from 'src/app/models/auth-form-enum.model';

@Component({
    template: `<connect-signup></connect-signup>`
})
class TestHostComponent {
}

describe('AuthFormLogo', () => {

    let testHostComponent: TestHostComponent;
    let signupComponent: SignupComponent;

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
                SignupComponent,
                TestHostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
        signupComponent = fixture.debugElement.query(By.css('connect-signup')).componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(testHostComponent).toBeTruthy();
        expect(signupComponent).toBeTruthy();
    });

    it('should initialize formType to signup', () => {
        signupComponent.ngOnInit();

        expect(signupComponent.formType).toEqual(FormType.SIGNUP);
    });

});
