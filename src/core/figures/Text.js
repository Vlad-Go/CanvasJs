import {CanvasElement} from './CanvasElement';

export class Text extends CanvasElement {
  constructor(position, text) {
    super();
    this.text =text;
    this.position = position;
  }
  render() {
    console.log(this.ctx);
    this.ctx.font = '48px serif';
    this.ctx.fillText(this.text, this.position.x, this.position.y);
    console.log( this.ctx.isPointInPath(49, 36));
  }
  hover(x, y) {
    console.log(this.context.isPointInPath(x, y));
  }
}
