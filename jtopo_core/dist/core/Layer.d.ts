import DisplayObject from './DisplayObject';
import Rectangle from './Rectangle';
import CanvasRender from './CanvasRender';
import Stage from './Stage';
import Point from './Point';
/**
 * 只用作展示的层，每个层对应一个Canvas.
 * <p>每个层有自己的帧数控制</p>
 *
 * @class
 * @extends DisplayObject
 */
declare class Layer extends DisplayObject {
    stage: Stage;
    render: CanvasRender;
    index: any;
    hasImageLoad: boolean;
    isDraging: boolean;
    dragDrawDelay: boolean;
    showBorder: boolean;
    mousePointInLayer?: Point;
    /**
     * 视图(2d/3d)
     */
    view: string;
    paint: Function;
    _paint2d: Function;
    /** canvas矩形到Layer的投影 */
    viewRect: Rectangle;
    /**
     * 绘制时是否裁减掉画布外的节点
     */
    cuttingHide: boolean;
    /**
     * 绘制在当前画布上对象列表
     */
    displayList: Array<DisplayObject>;
    isLayer: boolean;
    className: string;
    requestReapint: boolean;
    _frames: number;
    lastTime: any;
    mouseEnabled: boolean;
    draggable: boolean;
    /** 是否响应鼠标缩放 */
    wheelZoom: boolean;
    /**
     * @param {String} name 名字
     */
    constructor(name?: string);
    setView(type: any): void;
    setRender(render: any): void;
    paintPrepare(render: any): boolean;
    getViewRectInLayer(): Rectangle;
    toFileJson(): string;
    updateViewRect(): Rectangle;
    updateSize(w: any, h: any): void;
    pickUpChild(pickMouseDisabled: any): any;
    pickUpByRect(boxRect: any): any[];
    translateWith(x: any, y: any): this;
    css(name: any, value?: any): this;
    getAABB(recursive: any): any;
    show(): this;
    hide(): this;
    draw(ctx: any): void;
    zoom(x: any, y: any, cx?: number, cy?: number): this;
    cancelZoom(): void;
    /**
     * 更新，申请画面重绘
     */
    update(): void;
    forceUpdate(ctx: any): void;
    /**
     * 该方法已过时，未来版本不再支持, 请使用css方法
     */
    setBackground(background: any, backgroundSize: any): void;
    /**
     * 根据属性来查找Layer中的对象
     * <p>例如：layer.find('text', 'node_3'); 会返回对象的text属性是 'node_3'的所有对象 </p>.
     * <p>例如：layer.find('isNode', true); 会返回所有Node对象 </p>.
     * <p>例如：layer.find('isLink', true); 会返回所有Link对象 </p>.
     * @param {String} name 属性名称
     * @param {Object} value 属性值
     * @param {Boolean} recursive 是否递归查找下级子节点
     * @return {Array}
     */
    find(name: any, value: any, recursive: any): any[];
    toStageAABB(aabb: any): any;
    toLayerRect(rect: any): Rectangle;
    dragHandle(event: any): void;
    setDrawDelay(isDelay: any): void;
    dragEndHandler(event: any): void;
    addChild(child: any): this;
    addChilds(childs: any): void;
    /**
     * 平移Layer，将node对象作为还不显示的中心
     * @param {Node} node 可为null
     */
    centerBy(obj: any): void;
    openJson(json: any): void;
    fillByJson(json: any): this;
    restoreBackground(style: any): void;
    reloadJsonTest(): string;
    getAllVisiable(): any;
    getMousePoint(): any;
    /**
     * 自定义渲染器
     */
    setRenderView(render: any): void;
    /**
     * 将一组Node的中心点平移到指定x，y
     * @param {Array} nodes
     * @param {number} x
     * @param {number} y
     */
    translateObjectsCenterTo(objects: any, x: any, y: any): void;
    _destory(): void;
}
export { Layer as default };
