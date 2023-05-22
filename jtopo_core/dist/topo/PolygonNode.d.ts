import Node from './Node';
/**
 * 多边形节点,
 * @class
 * @extends Node
 */
declare class PolygonNode extends Node {
    /**
     * 多边形的边数量，最少为3
     */
    edges: number;
    /**
     * 多边形的顶点数组    如：[[10, 10], [20, 13], [45, 66]....]
     */
    coordinates: Array<Array<number>>;
    /**
     * 节点内部图形的旋转量 - 与节点自身的旋转不同
     */
    contentRotation?: number;
    /**
     * 构造函数
     * @param {string} text
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} edges 边的数量（大于等于3）
     */
    constructor(text: any, x: any, y: any, w: any, h: any, edges: any);
    /**
     * 设置坐标数组
     * @param {Array} coordinates 如：[[10, 10], [20, 13], [45, 66]....]
     */
    setCoordinates(coordinates: any): void;
    drawShape(ctx: any, x: any, y: any, w: any, h: any): void;
    draw(ctx: any): this;
    /**
     * 获取坐标数组
     * @returns {Array}
     */
    getVertices(): any;
    getPosition(name: any, x?: number, y?: number): any;
    getPoints(): any;
    /**
     * 旋转节点内的形状
     * @param {Number} angle 旋转度数（弧度）
     */
    rotateContent(angle: any): void;
    getPositionNormal(name: any): number[];
}
export { PolygonNode as default };
