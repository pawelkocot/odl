import {Injectable} from 'angular2/core';
import {Observable, Observer, Subscription} from 'rxjs';
import 'firebase';

@Injectable()
export class DevicesRepository {
    private source;
    private firebase:Firebase;

    constructor() {
        this.firebase = new Firebase('https://odl.firebaseio.com/messages');
        this.source = Observable.create((observer:Observer<any>) => {
            this.firebase.on('value', (value:FirebaseDataSnapshot) => {
                console.log('on value');
                observer.next(value.val());
            });
            return () => {
                console.log('disconnect');
            }
        }).publish().refCount();
    }

    public subscribe(callback:{(data:any):any}):Subscription {
        return this.source.subscribe(callback);
    }
}