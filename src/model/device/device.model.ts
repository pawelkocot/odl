export interface DeviceInterface {
    // readonly name:string,
    // readonly os:OsInterface
    readonly resolution:ResolutionInterface
}

export interface ResolutionInterface {
    readonly width:number,
    readonly height: number
}

export interface OsInterface {
    readonly name:string,
    readonly version: string
}