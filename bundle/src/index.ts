import { Topology, registerNode, Pen, Node, Point, Line, Rect, s8 } from 'csie-topology-core';
import { Store, Observer } from 'le5le-store';

import { register as registerFlow } from 'csie-topology-flow-diagram';
import { register as registerActivity } from 'csie-topology-activity-diagram';
import { register as registerClass } from 'csie-topology-class-diagram';
import { register as registerSequence } from 'csie-topology-sequence-diagram';
import { register as registerChart } from 'csie-topology-chart-diagram';
import { layout, alignNodes, spaceBetween } from 'csie-topology-layout';

registerFlow();
registerActivity();
registerClass();
registerSequence();
registerChart();

(window as any).Le5leTopology = {
  Topology,
  registerNode,
  Pen,
  Node,
  Point,
  Line,
  Rect,
  Store,
  Observer,
  s8,
  layout,
  alignNodes,
  spaceBetween
};
