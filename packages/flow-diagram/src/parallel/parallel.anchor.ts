import { Point, Node, Direction } from 'csie-topology-core';

export function flowParallelAnchors(node: Node) {
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y, Direction.Up));
  node.anchors.push(new Point(node.rect.x + node.rect.width / 2, node.rect.y + node.rect.height, Direction.Bottom));
}
