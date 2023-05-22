import Node from "./Node";
declare class ShapeNode extends Node {
    constructor(text: any, x: any, y: any, w: any, h: any);
    setPath(path: any): void;
    draw(ctx: any): void;
}
export { ShapeNode as default };
