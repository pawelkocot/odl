import {Component, Input} from 'angular2/core';
import {DeviceInterface} from '../model/device/device.model';

@Component({
    selector: 'devices-list',
    template: `
        <table>
            <tr *ngFor="#device of devices">
                <td>{{ device.name }}</td>            
            </tr>
        </table>
    `
})
export class DevicesListComponent {
    @Input() devices:DeviceInterface[] = [];
}