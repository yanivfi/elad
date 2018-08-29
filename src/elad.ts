export class Elad {
    private _name: string;
    private _version: string;
    constructor() {
        this._name = 'Elad Systems';
        this._version = '0.0.6';
    }
    get name() {
        return this._name;
    }
    get version() {
        return this._version;
    }
}