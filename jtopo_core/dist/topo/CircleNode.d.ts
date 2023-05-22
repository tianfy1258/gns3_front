import Node from './Node';
/**
 * 圆形节点
 * <pre style="font-size:12px">
let circleNode = new CircleNode('Circle', 181, 48);

// 设置半径
circleNode.setRadius(25);

// 等价于上面的.setRadius(25);
circleNode.resizeTo(50, 50);

</pre>
 * @class
 * @extends Node
 */
declare class CircleNode extends Node {
    /**
     * 半径
     */
    radius: number;
    beginAngle: number;
    endAngle: number;
    _z: number;
    constructor(text: any, x: any, y: any, w: any, h: any);
    /**
     * 设置半径
     * @param {number} r 圆半径
     */
    setRadius(r: any): void;
    drawShape(ctx: any, x: any, y: any, w: any, h: any): void;
    getPoint(t: any): {
        x: number;
        y: number;
    };
}
export { CircleNode as default };
