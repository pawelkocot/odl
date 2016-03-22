export class Device {
    constructor(private _name:string, private _os:Os, private _resolution:Resolution) {}

    get name():string { return this._name }
    get os():Os { return this._os }
    get resolution():Resolution { return this._resolution }
}

export class Resolution {
    constructor(private _width:number, private _height:number) {}

    get width():number { return this._width }
    get height():number { return this._height }
}

export class Os {
    constructor(private _name:string, private _version:string) {}

    get name():string { return this._name }
    get version():string { return this._version }
}