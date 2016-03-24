import {Observable, Observer, Subscription} from 'rxjs';
import {FirebaseService} from '../firebase/firebase.service';
import {Injectable} from 'angular2/core';
import {DeviceInterface} from '../model/device/device.model';
import 'firebase';
import 'lodash';

@Injectable()
export abstract class DevicesRepository {
    private _source:Observable<DeviceInterface[]>;
    private _firebaseService:FirebaseService;

    get firebase():Firebase { return this._firebaseService.firebase.child('devices') }
    get source():Observable<DeviceInterface[]> { return this._source ? this._source : this._source = this.initSource() }

    constructor(firebaseService:FirebaseService) {
        this._firebaseService = firebaseService;
    }

    public subscribe(callback):Subscription {
        return this.source.subscribe(callback);
    }

    private initSource() {
        console.log('initSource');
        return Observable
            .create((observer:Observer<any>) => this.firebase.on('value', (snapshot:FirebaseDataSnapshot) => observer.next(snapshot)))
            .map((snapshot:FirebaseDataSnapshot) => transformSnapshot(snapshot))
            .publishReplay(1)
            .refCount();
    }
}

function transformSnapshot(snapshot:FirebaseDataSnapshot):DeviceInterface[] {
    return _.toArray(snapshot.val()).map((obj:DeviceInterface) => obj);
}