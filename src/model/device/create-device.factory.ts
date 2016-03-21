import {DeviceInterface, OsInterface, ResolutionInterface} from "./device.model";

export function createDevice(name:string, os:OsInterface, resolution:ResolutionInterface):DeviceInterface {
    return {
        name: name,
        os: os,
        resolution: resolution
    };
}


class Deveice implements DeviceInterface {
    constructor(private resolution:ResolutionInterface) {
        this.resolution = resolution;
    }
}