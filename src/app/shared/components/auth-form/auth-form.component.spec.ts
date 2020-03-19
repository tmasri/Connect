import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormType } from 'src/app/models/auth-form-enum.model';
import { User } from 'src/app/models/user.model';
import { AuthFormComponent } from './auth-form.component';

@Component({
  template: `
    <connect-auth-form [type]="formType" (values)="onSubmit($event)"></connect-auth-form >`
})
class TestHostComponent {
  public formType: FormType;

  public onSubmit(event: User): void {
  }
}

describe('AuthFormComponent', () => {

    let testHostComponent: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let authFormComponent: AuthFormComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormType
            ],
            declarations: [
                AuthFormComponent,
                TestHostComponent
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
        authFormComponent = fixture.debugElement.query(By.css('connect-auth-form')).componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        testHostComponent.formType = FormType.LOGIN;

        expect(testHostComponent).toBeTruthy();
    })

});
