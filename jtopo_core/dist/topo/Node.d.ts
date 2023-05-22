import DisplayObject from '../core/DisplayObject';
/**
 * 节点对象，形状为矩形；
 * 核心属性：坐标(x,y)和尺寸(width, height)
 
 * <p>创建一个节点, 通常有以下几种形式：</p>
 * <p>var node = new Node();</p>
 * <p>var node = new Node('name');</p>
 * <p>var node = new Node('name', 10, 10);</p>
 * <p>var node = new Node('name', 10, 10, 30, 30);</p>
 *
 * @alias Node
 * @class
 * @extends DisplayObject
 */
declare class Node extends DisplayObject {
    /**
     * 节点文本
     * <p> 多行直接可以使用\n换行 </p>
     */
    text: string;
    _text: string;
    _textArr: string;
    _textDirty: boolean;
    _textHeight: number;
    /**
     * 文本水平偏移量
     */
    textOffsetX: any;
    /**
     * 文本垂直偏移量
     */
    textOffsetY: any;
    image: any;
    private _image;
    /**
    * 是否是Node类的对象, 主要用于和Link区分
    */
    isNode: boolean;
    className: string;
    /**
     * 图片的src
     */
    private _imageSrc;
    zIndex: number;
    /**
    * 序列化属性列表
    */
    serializers: Array<string>;
    getCtrlPoints: Function;
    getAnchorPoints: Function;
    /**
     * 所有参数可以为空，通过其他方法按需设置
     * @param {string} text 文本
     * @param {x} x 坐标x
     * @param {y} y 坐标y
     * @param {number} width 宽度
     * @param {number} height 高度
     */
    constructor(text?: string, x?: number, y?: number, w?: number, h?: number);
    /**
     * 设置图片
     * @param {String} img 图片的路径或者图片(Image), 或者 HtmlImage 或者 Canvas
     */
    setImage(img: any, fitSize: any): this;
    /**
     * 调整尺寸到图片的实际大小
     */
    resizeToFitImage(): void;
    init(text: any, x: any, y: any, w: any, h: any): void;
    drawShape(ctx: any, x: any, y: any, w: any, h: any): void;
    strokeAndFill(ctx: any): void;
    draw(ctx: any): void;
    calcTextPosition(): any;
    paintText(ctx: any): any;
    getLinkChildren(recursive: any): any;
    getSegmentPoints(): import("../core/Point").default[];
    nearest(x: any, y: any): any;
}
export { Node as default };
