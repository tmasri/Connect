import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthFormLogoComponent } from './auth-form-logo.component';

@Component({
    template: `<connect-form-logo></connect-form-logo>`
})
class TestHostComponent {
}

describe('AuthFormLogo', () => {

    let testHostComponent: TestHostComponent;
    let authFormLogo: AuthFormLogoComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            declarations: [
                AuthFormLogoComponent,
                TestHostComponent
            ]
        }).compileComponents();
    }));

    it('should create component', () => {
        const fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
        authFormLogo = fixture.debugElement.query(By.css('connect-form-logo')).componentInstance;

        expect(testHostComponent).toBeTruthy();
        expect(authFormLogo).toBeTruthy();
    });
});
