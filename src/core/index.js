import {ContextManager} from './ContextManager';
import {Store} from './Store';

export class CanvasJs {
  constructor(context) {
    this.Store = new Store();
    this.ContextManager = new ContextManager(
        context,
        this.Store.getstate.bind(this.Store));
  }
  initElements(state) {
    debugger;
    state.forEach((el) => el.ctx = this.ContextManager.c);
    this.Store.init(state);
    this.ContextManager.emit();
  }
}
