import { Node } from 'topology-core/models/node';

export function flowData(ctx: CanvasRenderingContext2D, node: Node) {
  ctx.beginPath();
  
  const img = new Image();
  img.src = '../assets/img/dianjing.png';
  ctx.drawImage(img,10,10);

  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}