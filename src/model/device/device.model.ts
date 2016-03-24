export interface DeviceInterface {
    name:string,
    os:OsInterface
    resolution:ResolutionInterface
}

export interface OsInterface {
    name:string,
    version:string
}

export interface ResolutionInterface {
    width:number,
    height:number
}