import Node from "./Node";
/**
 * 箭头是一个比较常用的对象
 * @class
 * @extends Node
 */
declare class ArrowNode extends Node {
    arrowShape: string;
    constructor(text: any, x: any, y: any, w: any, h: any);
    drawShape(ctx: any, x: any, y: any, w: any, h: any): void;
}
export { ArrowNode as default };
