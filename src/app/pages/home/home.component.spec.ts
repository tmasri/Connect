import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

@Component({
    template: `<connect-home></connect-home>`
})
class TestHostComponent {
}

describe('AuthFormLogo', () => {

    let testHostComponent: TestHostComponent;
    let home: HomeComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            declarations: [
                HomeComponent,
                TestHostComponent
            ]
        }).compileComponents();
    }));

    it('should create component', () => {
        const fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
        home = fixture.debugElement.query(By.css('connect-home')).componentInstance;

        expect(testHostComponent).toBeTruthy();
        expect(home).toBeTruthy();
    });
});
