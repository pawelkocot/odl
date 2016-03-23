import {Component} from 'angular2/core';
import 'lodash';
import {DevicesRepository} from '../repository/devices.repository';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app',
    template: `
        <button (click)="subscribe()">subscribe</button>
        <button (click)="unsubscribe()">unsubscribe</button>
        
        subscriptions {{ subscriptions.length }}
        `,
    providers: [DevicesRepository]
})
export class AppComponent {
    private firebase:Firebase;
    private user:Object = null;
    public messages:string[] = [];
    public subscriptions:Subscription[] = [];

    constructor(private devicesRepository:DevicesRepository) {}

    subscribe() {
        const number = this.subscriptions.length;

        this.subscriptions.push(this.devicesRepository.subscribe((data) => console.log(number, data)));
    }

    unsubscribe() {
        const subscription = this.subscriptions.pop();
        console.log(subscription);
        subscription.unsubscribe();
    }

    ngOnInit() {
        // const subscription = this.devicesRepository.subscribe((data) => console.log(data));
        // console.log(subscription);
        //".write": "auth != null && auth.uid == 'd571635f-65c9-44b7-a3aa-bc2b761e70e9'",

        // this.firebase = new Firebase('https://odl.firebaseio.com/messages');
        // this.firebase.onAuth((authData:FirebaseAuthData) => this.user = authData);
        //
        // this.firebase.on('value', (value:FirebaseDataSnapshot) => {
        //     this.messages = _.toArray(value.val()).map((obj:{title:string}) => obj.title);
        // });

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
            password: 'aaaaa1'
        });
    }

    logOut() {
        this.firebase.unauth();
    }
}