import Animation from '../animation/Animation';
/**
 * 布局基类
 * @class Layout
 */
declare class Layout {
    startX: any;
    startY: any;
    centerX: any;
    centerY: any;
    animationTime: any;
    onLayoutAction: any;
    onStopAction: any;
    marginTop: any;
    marginRight: any;
    marginBottom: any;
    marginLeft: any;
    animation: Animation;
    constructor();
    /**
     * 设置节点间隔
     * @param {Number} marginTop 上
     * @param {Number} marginRight 右
     * @param {Number} marginBottom 下
     * @param {Number} marginLeft 左
     */
    setMargin(marginTop: any, marginRight: any, marginBottom: any, marginLeft: any): this;
    /**
     * 设置布局后左上角的坐标
     * @param {Number} startX
     * @param {Number} startY
     */
    setXY(startX: any, startY: any): this;
    /**
     * 设置布局后的中心坐标
     * @param {Number} centerX
     * @param {Number} centerY
     */
    setCenter(centerX: any, centerY: any): this;
    /**
     * 设置动画时长, 有了动画时长就会出现动画效果
     * @param {Number} time
     */
    setTime(time: any): this;
    offsetData(vNodes: any): void;
    translate(nodes: any, vNodes: any): any;
    stop(): void;
    onLayout(f: any): this;
    static getParallelLine(): void;
    static setXYwithChildFixed(node: any, dx: any, dy: any): void;
    static translateNodesTo: typeof translateNodesTo;
    static getRootNodes: typeof getRootNodes;
    static getSons: typeof getSons;
    static getTreeDeep: typeof getTreeDeep;
    static getAverageSize: typeof getAverageSize;
    static getLinksCount: typeof getLinksCount;
    static travel: typeof travel;
    static getNodesRect: typeof getNodesRect;
    static getCenter: typeof getCenter;
}
declare function translateNodesTo(virtualNodes: any, x: any, y: any): void;
declare function getAverageSize(virtualNodes: any): {
    width: number;
    height: number;
};
declare function getRootNodes(objects: any): any;
export declare function getSons(elements: any, rootNode: any): any;
declare function getNodesRect(nodes: any): any;
declare function getCenter(nodes: any): any;
declare function getTreeDeep(elements: any, rootNode: any): number;
declare function getLinksCount(objectA: any, objectZ: any): number;
/**
 * 先序递归遍历Node和Link，从指定节点或者连线开始
 * @alias Layout.travel
 * @static
 * @param {DisplayObject} obj 开始对象，可以是Node也可以是Link
 * @returns Array 先序排序好的对象数组，有Node、Link对象
 */
declare function travel(obj: any, fn: any, parent: any, rs: any): any;
export { Layout as default };
