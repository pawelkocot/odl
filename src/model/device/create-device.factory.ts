import {Device, Os, Resolution} from "./device.model";

export function createDevice(name:string, os:Os, resolution:Resolution):Device {
    return new Device(name, os, resolution);
}