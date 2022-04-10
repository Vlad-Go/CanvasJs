import {CanvasJs} from './core';
import {Text} from './core/figures/Text';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

new CanvasJs(ctx).initElements([
  new Text({x: 50, y: 50}, 'text'),
]);

