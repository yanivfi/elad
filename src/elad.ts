export class Elad {
    private _name: string;
    private _version: string;
    private _age: number;
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
    get age() {
        return this._age;
    }
    set age(value: number) {
        this._age = value;
    }
}