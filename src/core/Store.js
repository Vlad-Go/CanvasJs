export class Store {
  constructor() {
    this.state = [{}];
    this.changesDec = [];
  }
  getstate() {
    return this.state;
  }
  init(state) {
    this.state = state;
  }
}
