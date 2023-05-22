import DisplayObject from './DisplayObject';
import CanvasRender from './CanvasRender';
import EventDetails from './EventDetails';
import Stage from './Stage';
/**
 * 缩略图对象
 * @class
 */
declare class Overview extends DisplayObject {
    handlerLayer: any;
    viewLayer: any;
    rectObj: any;
    currentTarget: any;
    stage: Stage;
    mouseInfo: EventDetails;
    render: CanvasRender;
    domElement: HTMLCanvasElement;
    canvas: HTMLCanvasElement;
    _updateTimer: any;
    /**
     * 内置对象，用户无法创建
     */
    constructor(stage: any);
    setStyles(domStyle: any): this;
    initEvent(): void;
    /**
     * 显示
     */
    show(): this;
    /** 隐藏
     */
    hide(): this;
    /**
     * 获得宽度
     * @returns {Number}
     */
    getWidth(): number;
    /** 获得高度
     * @returns {Number}
     */
    getHeight(): number;
    /**
     * 设置缩略图的尺寸
     * @param {number} width
     * @param {number} height
     */
    setSize(w: any, h: any): void;
    getLayersAABBRect(): any;
    paint(): void;
    paintDragRect(ctx: any, aabb: any): void;
    update(): void;
    mousedownHandler(event: any): void;
    mousedragHandler(event: any): void;
    moveWith(dx: any, dy: any): void;
    mousewheelHandler(e: any): void;
    mousemoveHandler(e: any): void;
    mouseupHandler(event: any): void;
    clickHandler(event: any): void;
    dblclickHandler(event: any): void;
}
export { Overview as default };
