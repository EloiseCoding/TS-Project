"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("topology-core/models/point");
var direction_1 = require("topology-core/models/direction");
function flowDataAnchors(node) {
    node.anchors.push(new point_1.Point(node.rect.x + node.rect.width / 14, node.rect.y + node.rect.height / 2, direction_1.Direction.Left));
    node.anchors.push(new point_1.Point(node.rect.x + (node.rect.width * 4) / 7, node.rect.y, direction_1.Direction.Up));
    node.anchors.push(new point_1.Point(node.rect.x + (node.rect.width * 13) / 14, node.rect.y + node.rect.height / 2, direction_1.Direction.Right));
    node.anchors.push(new point_1.Point(node.rect.x + (node.rect.width * 3) / 7, node.rect.ey, direction_1.Direction.Bottom));
}
exports.flowDataAnchors = flowDataAnchors;
