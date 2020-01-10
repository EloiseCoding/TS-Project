"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flowData(ctx, node) {
    ctx.beginPath();
    var img = new Image();
    img.src = '../assets/img/dianjing.png';
    ctx.drawImage(img, 10, 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
exports.flowData = flowData;
