import {Component, Input} from 'angular2/core';
import {Device} from '../model/device/device.model';

@Component({
    selector: 'devices-list',
    template: `diwajses`
})
export class DevicesListComponent {
    @Input() devices:Device[] = [];
}