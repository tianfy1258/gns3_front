import Node from './Node';
/**
 * 提示、角标节点, 通常用于告警、提示。 节点的原点(0,0)默认是最下方居中位置
 * @class
 * @extends Node
 */
declare class TipNode extends Node {
    spacing: number;
    autoSize: boolean;
    constructor(text: any, x: any, y: any, w: any, h: any);
    draw(ctx: any): void;
}
export { TipNode as default };
