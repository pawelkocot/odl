import {Component, Input} from 'angular2/core'
import {DeviceInterface} from '../model/device/device.model'

@Component({
    selector: 'devices-list',
    template: `
        <span *ngIf='!devices.length'>No devices</span>
        <table *ngIf='devices.length'>
            <thed>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
            </thed>
            <tbody>
                <tr *ngFor='#device of devices'>
                    <td>{{ device.name }}</td>
                </tr>
            </tbody>
        </table>
`
})
export class DevicesListComponent {
    @Input() devices:DeviceInterface[]
}