import {Component} from 'angular2/core'
import {DevicesRepository} from '../repository/devices.repository'
import {DevicesListComponent} from './devices-list.component'
import {DeviceInterface} from '../model/device/device.model'

@Component({
    selector: 'app',
    template: `
        <span *ngIf='!devicesLoaded'>Loading devices...</span>
        <devices-list *ngIf='devicesLoaded' [devices]='devices'></devices-list>
    `,
    directives: [DevicesListComponent],
    providers: [DevicesRepository]
})
export class AppComponent {
    public devicesLoaded:boolean = false
    public devices:DeviceInterface[]

    constructor(private devicesRepository:DevicesRepository) {}

    ngOnInit() {
        this.devicesRepository.subscribe((devices:DeviceInterface[]) => {
            this.devicesLoaded = true
            this.devices = devices
        })
    }
}