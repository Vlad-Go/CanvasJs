export class ContextManager {
  constructor(context, getState) {
    this.c = context;
    this.getState = getState;
  }
  emit() {
    console.log(this.getState());
    this.#render();
  }
  #render() {
    this.getState().forEach((el) => el.render());
  }
}
