class Placeholder {
  constructor() {
    this._date = new Date();
  }

  get date() {
    return new Date(Date.UTC(this._date.getUTCFullYear(), this._date.getUTCMonth(), this._date.getUTCDate()));
  }
}


export default Placeholder;
