export enum KeyType {
  None = -1,
  CtrlOrAlt,
  Ctrl,
  Shift,
  Alt,
  Any,
}

export enum KeydownType {
  None = -1,
  Document,
  Canvas,
}

export type Padding = number | string | number[];

export interface Options {
  cacheLen?: number;
  extDpiRatio?: number;
  width?: string | number;
  height?: string | number;
  color?: string;
  activeColor?: string;
  hoverColor?: string;
  anchorRadius?: number;
  anchorFillStyle?: string;
  dockStrokeStyle?: string;
  dockFillStyle?: string;
  dragColor?: string;
  animateColor?: string;
  font?: {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    lineHeight?: number;
    textAlign?: string;
    textBaseline?: string;
  };
  rotateCursor?: string;
  hoverCursor?: string;
  hideInput?: boolean;
  hideRotateCP?: boolean;
  hideSizeCP?: boolean;
  hideAnchor?: boolean;
  onlySizeX?: boolean;
  onlySizeY?: boolean;
  anchorSize?: number;
  alwaysAnchor?: boolean;
  autoAnchor?: boolean;
  disableEmptyLine?: boolean;
  disableRepeatLine?: boolean;
  disableScale?: boolean;
  disableMoveOutParent?: boolean;
  disableDockLine?: boolean;
  playIcon?: string;
  pauseIcon?: string;
  fullScreenIcon?: string;
  loopIcon?: string;
  translateKey?: KeyType;
  scaleKey?: KeyType;
  minScale?: number;
  maxScale?: number;
  autoExpandDistance?: number;
  keydown?: KeydownType;
  viewPadding?: Padding;
  grid?: boolean;
  rule?: boolean;
  on?: (event: string, data: any) => void;
}

export const DefalutOptions: Options = {
  cacheLen: 30,
  font: {
    color: '#222',
    fontFamily: '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
    fontSize: 12,
    lineHeight: 1.5,
    textAlign: 'center',
    textBaseline: 'middle',
  },
  color: '#222',
  activeColor: '#1890ff',
  hoverColor: '#fa541c',
  anchorRadius: 4,
  anchorFillStyle: '#fff',
  dockStrokeStyle: '#fa541c',
  dockFillStyle: '#fa541c',
  dragColor: '#1890ff',
  rotateCursor: '/assets/img/rotate.cur',
  hoverCursor: 'pointer',
  minScale: 0.25,
  maxScale: 5,
  anchorSize: 5,
  autoExpandDistance: 200,
  keydown: KeydownType.Document,
  viewPadding: 0,
  autoAnchor: true,
};
