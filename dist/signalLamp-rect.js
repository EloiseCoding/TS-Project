"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = require("topology-core/models/rect");
function flowDataIconRect(node) {
    node.iconRect = new rect_1.Rect(0, 0, 0, 0);
}
exports.flowDataIconRect = flowDataIconRect;
function flowDataTextRect(node) {
    node.textRect = new rect_1.Rect(node.rect.x + node.rect.width / 7, node.rect.y, (node.rect.width * 5) / 7, node.rect.height);
    node.fullTextRect = node.textRect;
}
exports.flowDataTextRect = flowDataTextRect;
