import DisplayObject from '../core/DisplayObject';
import Point from '../core/Point';
import Node from './Node';
/**
 * 连线对象，有起点和终端;
 *
 * <p>创建和设置起止， 有以下形式： </p>
 * <p>var link = new Link('text', 开始对象, 结束对象, 开始端点, 结束端点);</p>
 *
 * <p>var link = new Link();</p>
 * <p>link.text = 'text';</p>
 * <p>link.setBegin(开始对象, 端点)</p>
 * <p>link.setEnd(结束对象, 端点)</p>
 *
 * <p>更多示例：</p>
 * <p>var link = new Link('text', beginNode, endNode);</p>
 * <p>var link = new Link('text', beginNode, endNode, 'center', 'center');</p>
 * <p>var link = new Link('text', beginNode, {x: 10, y:20}, 'center');</p>
 * <p>var link = new Link('text', {x: 10, y:20}, endNode, 'center');</p>
 * <p>var link = new Link('text', {x:0, y:0}, {x: 10, y:20});</p>
 * @class
 * @extends DisplayObject
 */
declare class Link extends DisplayObject {
    points: Array<Point>;
    text: string;
    _textDirty: boolean;
    _textHeight: number;
    label?: Node;
    beginArrow?: Node;
    endArrow?: Node;
    mousedownInitBegin?: any;
    mousedownInitEnd?: any;
    /**
     * 连线的开始对象
     * <pre>
     * 比如：link.begin = {
     *   object: 对象[可以是Node、Link、也可以是一个简单的点：{x:12, y:12}],
     *   position: 'center' // 可以为空，默认为 'center'
     * };
     * </pre>
     */
    begin: any;
    /**
     * 连线的结束对象
     * <pre>
     * 比如：link.end = {
     *  object: 对象[可以是Node、Link、也可以是一个简单的点：{x:12, y:12}],
     *  position: 'center' // 可以为空，默认为 'center'
     * };
     * </pre>
     */
    end: any;
    beginOffset: any;
    endOffset: any;
    /**
     * zIndex 控制显示前后排序
     * <p>Link默认为1, Node默认为2，Link默认绘制在Node的后面</p>
     */
    zIndex: number;
    className: string;
    /**
     * 是否是Link类的对象, 主要用于和Node区分
     */
    isLink: boolean;
    _pickRadius: number;
    DefaultPositions: any;
    serializers: Array<string>;
    getAnchorPoints: Function;
    /**
     * @constructor
     * @param {string} text 文本，可为空
     * @param {Object} begin 开始节点对象
     * @param {Object} end  结束节点对象
     * @param {string} beginEndpoint 开始节点对象的‘定位点’, 可为空，默认为"center"
     * @param {string} endEndpoint  结束节点对象的‘定位点’, 可为空，默认为"center"
     */
    constructor(text: any, begin: any, end: any, beginEndpoint: any, endEndpoint: any);
    paintPrepare(render: any): boolean;
    initLabel(node: any): any;
    /**
     * 设置文本标签
     * <p>
     * link.setLabel(new TextNode('abc'));  // 简写: link.text = 'abc';
     * </p>
     * @param {Node} textOrNode 文字或者Node对象
     */
    setLabel(textOrNode: any): void;
    getBeginArrow(): Node;
    /**
     * 设置开始端的箭头
     * <p>例如：link.setBeginArrow(new CircleNode());         // 圆形箭头</p>
     * @param {Node} node
     */
    setBeginArrow(node: any): void;
    getEndArrow(): Node;
    /**
     * 设置结束端的箭头
     * <p>例如：link.setEndArrow(new ArrowNode()); // 箭头</p>
     * @param {Node} node
     */
    setEndArrow(node: any): void;
    getAABB(recursive: any, deep: any): any;
    /**
     * 设置连线的开始点
     * @param {Object} target 开始连接点对象，可以是Node、Link，也可以是一个简单的点，比如：{x:10, y:10}, 甚至是一个函数，函数返回的对象必须有x、y属性。
     * @param {String} positionName
     */
    setBegin(target: any, positionName?: string): void;
    /**
     * 设置连线的结束点
     * @param {Object} target 连接对象，可以是Node、Link，也可以是一个简单的点，比如：{x:10, y:10}, 甚至是一个函数，函数返回的对象必须有x、y属性。
     * @param {String} positionName 端点
     */
    setEnd(target: any, positionName?: string): void;
    /**
     * 获取连线的开始点坐标
     * @return {Object} 比如 {x: 10, y:10}
     */
    getBeginPoint(): Point;
    /**
     * 获取连线的结束点坐标
     * @return {Object} 比如 {x: 10, y:10}
     */
    getEndPoint(): Point;
    drawPoints(ctx: any, points: any): void;
    /**
     * 绘制
     * @param {Object} ctx Cavans图形的上下文
     */
    draw(ctx: any): this;
    mousedownHandler(e: any): void;
    mousedragHandler(event: any): void;
    translateWith(dx: any, dy: any): this;
    calcAZ(): any[];
    offsetAZHandle(points: any): void;
    updatePoints(): Point[];
    getPoints(): Point[];
    nearest(x: any, y: any): any;
    getSegmentPoints(): Point[];
    upgradeParent(): any;
    isEndpointHasSameParent(): boolean;
    isAlone(): boolean;
    isBeginDisplayObject(): boolean;
    isEndDisplayObject(): boolean;
    unlinkBegin(): void;
    unlinkEnd(): void;
    unlink(): void;
}
export declare function getPointByEndpoint(link: any, endpoint: any): any;
export { Link as default, };
