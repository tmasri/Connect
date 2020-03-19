import { Component, OnInit } from "@angular/core";
import { ConnectService } from 'src/app/services/share/connect.service';

@Component({
    selector: 'connect-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private _connect: ConnectService) {}

    public ngOnInit(): void {
    }

}