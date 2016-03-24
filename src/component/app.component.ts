import {Component} from 'angular2/core';
import {DevicesRepository} from '../repository/devices.repository';
import {Subscription} from 'rxjs';
import {DevicesListComponent} from './devices-list.component';
import {DeviceInterface} from "../model/device/device.model";

@Component({
    selector: 'app',
    template: `
        <devices-list [devices]="devices"></devices-list>
    `,
    directives: [DevicesListComponent],
    providers: [DevicesRepository]
})
export class AppComponent {
    public devices:DeviceInterface[];

    constructor(private devicesRepository:DevicesRepository) {}

    ngOnInit() {
        this.devicesRepository.subscribe((devices:DeviceInterface[]) => {
            console.log(devices);
            this.devices = devices;
        });
    }

    // logIn() {
    //     this.firebase.authWithPassword({
    //         email: 'kocot.pawel@gmail.com',
    //         password: 'aaaaa1'
    //     });
    // }
    //
    // logOut() {
    //     this.firebase.unauth();
    // }
}