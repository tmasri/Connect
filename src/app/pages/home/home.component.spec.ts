import { async, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
    template: `<connect-home></connect-home>`
})
class TestHostComponent {
}

describe('HomeComponent', () => {

    let testHostComponent: TestHostComponent;
    let home: HomeComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule
            ],
            declarations: [
                HomeComponent,
                TestHostComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        const fixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = fixture.componentInstance;
        home = fixture.debugElement.query(By.css('connect-home')).componentInstance;
    });

    it('should create component', () => {
        expect(testHostComponent).toBeTruthy();
        expect(home).toBeTruthy();
    });

});
