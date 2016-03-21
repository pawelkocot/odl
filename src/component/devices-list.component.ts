import {Component, Input} from 'angular2/core';

@Component({
    selector: 'devices-list',
    template: `diwajses`
})
export class DevicesListComponent {
    @Input() devices = [];
}