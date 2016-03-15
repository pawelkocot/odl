import {Component} from 'angular2/core';

import * as Firebase from 'firebase';

@Component({
    selector: 'app',
    template: 'AppComponent'
})
export class AppComponent {
    messagesRef:Firebase;

    constructor() {
        console.log(Firebase);
        this.messagesRef = new Firebase('https://angular-connect.firebaseio.com/messages');
        console.log(this.messagesRef);
    }
}