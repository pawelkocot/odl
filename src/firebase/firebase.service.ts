import {Injectable} from 'angular2/core';
import 'firebase';

@Injectable()
export class FirebaseService {
    private _firebase:Firebase;

    get firebase():Firebase {
        if (!this._firebase) {
            // @todo configurable path
            this._firebase = new Firebase('https://odl.firebaseio.com/');
        }

        return this._firebase;
    }
}