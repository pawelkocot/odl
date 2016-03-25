import {DeviceInterface, OsInterface, ResolutionInterface} from './device.model'

export function createDevice(name:string, os:OsInterface, resolution:ResolutionInterface):DeviceInterface {
    return new Device(name, os, resolution)
}

class Device implements DeviceInterface {
    constructor(public name:string, public os:OsInterface, public resolution:ResolutionInterface) {}
}