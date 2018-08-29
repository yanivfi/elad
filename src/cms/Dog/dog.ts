export class Dog {
  private _name: string;
  constructor() {
    this._name = 'Dog';
  }
  get name() {
    return this._name;
  }
}
