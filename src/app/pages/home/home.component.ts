import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/services/share/connect.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user.model';
import { Subscription, Observable } from 'rxjs';
import { SendLink } from 'src/app/models/send-link.model';
import { Router } from '@angular/router';
import { LinkRecieved } from 'src/app/models/link.model';

@Component({
    selector: 'connect-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // private link: Subscription;
    public data: User = { id: '1', email: 'tareq@gmail.com' };
    private _user: User = null;
    public sendLink: string;
    private _linkSub: Subscription;

    link: Observable<LinkRecieved>;

    constructor(private _connect: ConnectService,
                private _auth: AuthService,
                private _router: Router) {}

    public ngOnInit(): void {
        // this._user = this._auth.getUser();
        // if (this._user == null) {
        //     this._router.navigate(['']);
        // }
        this.sendLink = '';
        this._connect.getLinkSocket();
        this.link = this._connect.currentLink;
        this.link.subscribe(l => {
            this._openLink(this._jsonToLink(l));
            this._connect.removeLinkSocket(l);
        });
        // this._linkSub = this._connect.
        // This is for when you are ready to put the web app on aws
        // if (!this._auth.getUser()) {
        //     this._router.navigate(['']);
        // }
    }

    public startListening(): void {
        this._connect.getLink();
        // this.link = this._connect.getLinkListener().subscribe(link => {
        //     this._openLink(link);
        // });
    }

    private _openLink(link: LinkRecieved): void {
        window.open(link.link, '_blank');
        const sendLink: SendLink = {
            shared_id: link.id,
            user_id: localStorage.getItem('user_id')
        };
        this._connect.linkRecieved(sendLink);
    }

    public send(): void {
        this.sendLink = 'http://tareqmasri.com';
        const sendLink: SendLink = {
            shared_value: this.sendLink,
            user_id: localStorage.getItem('user_id')
        };
        this._connect.sendLink(sendLink);
    }

    private _jsonToLink(data: any): LinkRecieved {
        const link: LinkRecieved = {
            id: data.shared_id,
            link: data.shared_value
        };
        return link;
    }

}
