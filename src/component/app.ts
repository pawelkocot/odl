import {Component} from 'angular2/core';
import 'firebase';
import 'lodash';

@Component({
    selector: 'app',
    template: `
        <button *ngIf="!user" (click)="logIn()">Log in</button>
        <div *ngIf="user">
            {{ user }}
            <button (click)="logOut()">Log out</button>
        </div>
        <div *ngFor="#message of messages">{{message}}</div>
        `
})
export class AppComponent {
    public firebase:Firebase;
    public user:Object = null;
    public messages:string[] = [];

    ngOnInit() {
        //".write": "auth != null && auth.uid == 'd571635f-65c9-44b7-a3aa-bc2b761e70e9'",
        this.firebase = new Firebase('https://odl.firebaseio.com/messages');
        this.firebase.onAuth((authData:FirebaseAuthData) => {
            console.log(authData);
            this.user = authData;
        });

        this.firebase.on('value', (value:FirebaseDataSnapshot) => {
            this.messages = _.toArray(value.val()).map((obj:{title:string}) => obj.title);
        });

        //this.messagesRef.on('value', (value) => console.log('on value', value.val()), (error) => console.log('on value failed', error));
        //this.messagesRef.on('child_added', (value) => console.log('on child_added', value.val()), (error) => console.log('on child_added failed', error));

        //this.messagesRef.push({
        //    date: new Date().getTime(),
        //    title: "Hello World!",
        //    author: "Firebase",
        //}).then(
        //    (data) => console.log('push success', data),
        //    (error) => console.log('push error', error)
        //);
    }

    logIn() {
        this.firebase.authWithPassword({
            email: 'kocot.pawel@gmail.com',
            password: 'aaaaa'
        });
    }

    logOut() {
        this.firebase.unauth();
    }
}