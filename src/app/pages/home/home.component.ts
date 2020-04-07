import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/share/connect.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user.model';
import { Subject, Observable, Subscription } from 'rxjs';
import { SendLink } from 'src/app/models/send-link.model';
import { Router } from '@angular/router';
import { LinkRecieved } from 'src/app/models/link.model';

@Component({
    selector: 'connect-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private link: Subscription;
    public data: User = { id: '1', email: 'tareq@gmail.com' };

    constructor(private _connect: ConnectService,
                private _auth: AuthService,
                private _router: Router) {}

    public ngOnInit(): void {
        // This is for when you are ready to put the web app on aws
        // if (!this._auth.getUser()) {
        //     this._router.navigate(['']);
        // }
    }

    public startListening(): void {
        this._connect.getLink();
        this.link = this._connect.getLinkListener().subscribe(link => {
            this._openLink(link)
        });
    }

    private _openLink(link: LinkRecieved): void {
        window.open(link.link, '_blank');
        const sendLink: SendLink = {
            linkId: link.id,
            userId: this._auth.getUser().id
        };
        this._connect.linkRecieved(sendLink);
    }

}
