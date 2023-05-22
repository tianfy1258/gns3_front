import EventTarget from '../events/EventTarget';
import Collection from './Collection';
import Rectangle from './Rectangle';
import Style from './Style';
import Transform from './Transform';
import Point from './Point';
/**
 * 显示对象, Node、Link的父类
 */
declare class DisplayObject extends EventTarget {
    /**
     * 唯一标志，不能有重复
     */
    id: number;
    /**
     * 名称，可以在编辑时指定，运行时通过名称获取到多谢
     */
    name?: string;
    path?: any;
    /**
     * 坐标x
     */
    x: number;
    /**
     * 坐标y
     */
    y: number;
    shadowColor: string;
    z: number;
    /** 宽度 */
    width: number;
    /**
     * 高度
     */
    height: number;
    /**
     * 上级对象
     */
    parent?: DisplayObject;
    /**
     * 子节点集合
     */
    children: Collection;
    matrix: Transform;
    /**
     * 样式
     */
    style: Style;
    /**
    * 选中时的样式，如果不设置将使用默认的
    */
    selectedStyle?: Style;
    /**
    * 自定义选中状态如何绘制的回调函数，jtopo默认：Node选中在对象外层出现一个框，Link是呈现阴影
    * <p>默认值：null， 使用jtopo默认</p>
    */
    paintSelected?: Function;
    /**
     * 本地坐标系的原点，默认为[0,0], 父节点的左上角
     */
    origin: Array<number>;
    positions: any;
    /** 是否绘制到了最后一帧：是否在当前最新的画布上 */
    painted: boolean;
    isPointOn: boolean;
    dirty: boolean;
    /**
     * 鼠标选中线的精度, 默认为null，是否精准才能选中, 数值越大鼠标越好选中
     */
    _pickRadius: any;
    /**
    * 为了安全考虑，防止与对象属性冲突,用户最好使用该对象
    * 用户附加到该对象的自定义属性
    */
    userData?: any;
    _aabbInLayer: Rectangle;
    /**
     * 所有以本对象为结束点的Link对象数组
     */
    inLinks: Collection;
    /**
    * 所有以本节点为开始点的Link对象数组
    */
    outLinks: Collection;
    states: Array<any>;
    destroyed: boolean;
    /**
     * 序列化属性列表
     */
    serializers: Array<string>;
    /**
     * 是否跟随父节点(当父节点是Link的时候)旋转
     **/
    originAutoRotate: boolean;
    originOffset: number;
    /**
     * zIndex显示前后排序
     * <p>Node默认为2，Link默认为1, Link默认绘制在Node的后面</p>
     */
    zIndex: number;

    frozen: boolean;
    /**
     * 水平缩放系数
     */
    scaleX: number;
    /**
     * 垂直缩放系数
     */
    scaleY: number;
    skewX: number;
    skewY: number;
    /**
     * 层级深度, Layer为0，下面第一层子节点为1，依次类推
     */
    deep: number;
    /**
     * 旋转角度
     */
    rotation: number;
    /**
     * 是否可见
     */
    visible: boolean;
    /**
    * 是否显示选中的效果，默认显示
    */
    showSelected: boolean;
    /**
    * 是否可序列化，默认true
    * 如果为false，序列化时将跳过该对象
    */
    serializeable: boolean;
    isDisplayObject: boolean;
    /**
    * 是否可连线，仅仅编辑模式有意义
    */
    connectable: boolean;
    /**
     * 是否响应鼠标，为false的时候，不响应鼠标的动作
     */
    mouseEnabled: boolean;
    /**
     * 是否可拖拽
     */
    draggable: boolean;
    /**
     * 是否被选中了
     */
    isSelected: boolean;
    /**
     * 是否可以调整角度、尺寸，仅仅编辑模式有意义
     */
    editable: boolean;
    DefaultPositions: any;
    constructor();
    setName(name: any): void;
    getName(): string;
    getSegmentPoints(): Array<Point>;
    getAllVisiable(): Array<any>;
    /**
     * 绘制具体内容
     * @param {Object} ctx Canvas.context
     */
    draw(ctx: any): void;
    transformPoint(p: any): any;
    getTransform(): any;
    /**
     * 按系数平移对象
     * @alias Node.prototype.translateBy
     * @param {Number} sx x坐标系数
     * @param {Number} yx y坐标系数
     */
    translateBy(x: any, y: any): this;
    /**
     * 增量平移对象, 在对象原有的坐标基础上，增加偏移(dx,dy)。相当于: x += dx; y += dy。
     * @param {Number} dx
     * @param {Number} dy
     * @return {void}
     */
    translateWith(x: any, y: any): this;
    /**
     * 平移对象到指定位置(x,y)
     * @param {Number} x
     * @param {Number} y
     */
    translateTo(x: any, y: any): this;
    setXY(x: any, y: any): this;
    /**
     * 平移对象的中心点到指定位置(x,y)
     * @param {Number} x
     * @param {Number} y
     */
    translateCenterTo(x: any, y: any): this;
    /**
     * 平移对象的某个点到指定位置(x,y),整个对象随之移动
     * @param {String} positionName
     * @param {Number} x
     * @param {Number} y
     */
    translatePositionTo(positionName: any, x: any, y: any): void;
    /**
     * 获取中心点 {x,y}, 即： {x: this.x + this.width/2, y:this.y + this.height/2}
     * @returns {object} {x:xx, y:xx}
     */
    getCenter(): {
        x: number;
        y: number;
    };
    /**
     * 按系统调整尺寸大小
     * @param {Number} sw 宽度系数
     * @param {Number} sh 高度系数
     */
    resizeBy(w: any, h: any): this;
    /**
     * 设置尺寸
     * @param {number} width 宽度
     * @param {number} height 高度
     */
    resizeTo(w: any, h: any): this;
    resizeWith(w: any, h: any): this;
    /**
     * 按系数缩放
     * @param {number} sx 宽度缩放系数
     * @param {number} sy 高度缩放系数
     */
    scaleBy(x: any, y: any): this;
    /**
     * 以中心点sx，sy做缩放
     * @param {Number} sx 水平缩放
     * @param {Number} sy 垂直缩放
     */
    zoom(sx: any, sy: any, cx?: number, cy?: number): this;
    /**
     * 缩小到0.8
     */
    zoomOut(): this;
    /**
     * 放大到1.25
     */
    zoomIn(): this;
    /**
     * 缩放
     * @param {number} sx 水平缩放系数
     * @param {number} sy 垂直缩放系数
     */
    scaleTo(x: any, y: any): this;
    scaleWith(x: any, y: any): this;
    getScale(): {
        x: number;
        y: number;
    };
    rotateBy(angle: any): this;
    /**
     * 旋转
     * @param {number} angle 旋转角度（弧度）
     */
    rotateTo(angle: any): this;
    rotateWith(angle: any): this;
    getRect(): Rectangle;
    getStyle(name: any): Style;
    /**
     * 方法已过时，请使用 .css(...) 替代
     * @Deprecated
     */
    setStyles(name: any, value: any): this;
    /**
     * 1.3.8 新增方法，语法上支持一部分css样式
     *
     * <p>可以每次设置一个样式，如：obj.css('border', '1px solid '); </p>
     * <p>也可以一次设置一组样式，如: </p>
     * <pre style="font-size:12px;">
node.css({
    width: 48,
    height: '48px',
    border: 'solid 1px gray',
    borderRadius: 5,
    background: "white url('./demo/img/node2.png') no-repeat",
    backgroundSize: '32px 32px',
    backgroundPosition: 'center center',
    zIndex: 2,
    font: 'bold 11px arial',
    color: 'gray',
    textPosition: 'center',
    textAlign: 'center',
    textBaseline: 'middle',
});
     * </pre>
     * @param {Object} name
     * @param {String} value 如果不填写，就是读取样式
     */
    css(name: any, value?: any): this;
    /**
     * 1.4.4版本新增语法与css()方法使用方式基本一致
     *
     * <p>设置3D相关样式，仅3D试图下有意义</p>
     * <pre style="font-size: 12px;">
    // node: 3D立方体贴图-6个面 (left, right, top, bottom, front, back)
    node.css3D({
        materials : [
         './demo/img/pstn/router.png',
         './demo/img/pstn/msc.png',
         './demo/img/pstn/router.png',
         './demo/img/pstn/wdm.png',
         './demo/img/pstn/modem.png',
         './demo/img/pstn/terminal.png',
       ]
   });
   // link: 3D流动贴图( 在线条上移动的图片，通常是类似箭头的东西)
   link.css3D({
        materials : [
         flowMaterial: './demo/img/luobo2.png',
       ]
   });

    </pre>
     */
    getTransformByDeep(worldDeep: any): any;
    getLayerTransform(): any;
    getStageTransform(): any;
    /**
     * 显示
     */
    show(): this;
    /**
     * 隐藏
     */
    hide(): this;
    mousePickupPath(ctx: any, path?: any): void;
    mousePickupStroke(ctx: any, pickRadius: any): void;
    /**
     * 设置用户自定义数据
     * <p>直接在节点对象上增加属性不是稳妥的方法，若要向节点增加额外的属性，应该调用此方法</p>
     *
     * @param {Object} data
     */
    setUserData(data: any): this;
    /**
     * 读取用户自定义的数据
     */
    getUserData(): any;
    /**
     * 移除用户自定义的数据
     */
    removeUserData(): this;
    /**
     * 定义一个位置
     * @param {String} name
     * @param {Function} fun
     */
    definePosition(name: any, fun: any): void;
    /**
     * 得到对象内部位置坐标（参照左上角为0，0）
     * @param {String} name 位置名称
     * @param {Number} x name为nearest时需要
     * @param {Number} y name为nearest时需要
     * @returns {Object} {x:xxx, y:xxx}
     */
    getPosition(name: any, x?: number, y?: number): any;
    getOBB(deep: any): Point[];
    getPositionNames(): string[];
    getPoints(): Point[];
    /**
     * 获取对象上某一点
     * @param {number} t [0-1] 在线段上的比例
     * @param {number} segIndex 线段索引(Node是矩形，有4条线段，索引：[0-3]）可选项
     * @returns {Object} {x:xx y:xx}
     */
    getPoint(t: any, segIndex: any): {
        x: any;
        y: any;
    };
    /**
     * 获取对象边框或者线上某一点(本地坐标系)
     * @param {number} t
     * @param {number} segIndex 可选项
     * @returns {Object} {x:xx y:xx}
     */
    getLocalPoint(t: any, segIndex: any, offset?: any): any;
    findChildren(propertyName: any, value: any, recursive: any): any[];
    /**
     * 递归式 获取所有节点对象
     * @returns {Array<Node>} 所有节点对象
     */
    getAllNodes(): any[];
    /**
     * 递归式 获取所有连线对象
     * @returns {Array<Link>} 所有连线对象
     */
    getAllLinks(): any[];
    touchstartHandler(e: any): void;
    touchendHandler(e: any): void;
    touchmoveHandler(e: any): void;
    mousedownHandler(e: any): void;
    mouseupHandler(e: any): void;
    mouseoverHandler(e: any): void;
    mousemoveHandler(e: any): void;
    mouseenterHandler(event: any): void;
    mouseoutHandler(event: any): void;
    mousedragHandler(event: any): void;
    mousedragEndHandler(event: any): void;
    clickHandler(e: any): void;
    dblclickHandler(e: any): void;
    selectedHandler(): void;
    unselectedHandler(): void;
    pickUp(ctx: any, pickMouseDisabled: any): any;
    pickUpChild(ctx: any, pickMouseDisabled?: boolean): any;
    pickUpByRect(boxRect: any): any[];
    /**
     * 增加子对象
     * @param {Node} child
     */
    addChild(child: any): this;
    /**
     * 设置zIndex
     * @param {Number} index
     */
    setzIndex(index: any): void;
    updatezIndex(): void;
    updateChildrenDeep(recursive: any): void;
    /**
     * 获取所有子对象
     * @param {Array<DisplayObject>} childs
     */
    getChildren(): Collection;
    /**
     * 是否拥有子对象
     * @param {DisplayObject} child
     * @returns Boolean
     */
    hasChild(child: any): any;
    hasChildren(): boolean;
    /**
     * 从父容器中移除
     */
    removeFromParent(): this;
    /**
     * 方法已过时，使用removeFromParent()来替代
     */
    remove(): this;
    /**
     * 一次性增加多个对象, 比单个增加速度快多，数量越多越明显！
     * @param {DisplayObject} child
     */
    addChilds(childs: any): void;
    /**
     * 移除一个子对象
     * @param {Object} child
     */
    removeChild(child: any): this;
    /**
     * 移除多个子对象
     * @param {Array} childs
     */
    removeChilds(childs: any): this;
    /**
     * 移除所有子对象
     */
    removeAllChild(): this;
    replaceChild(child: any, newChild: any): void;
    translateChildrenWith(dx: any, dy: any): void;
    findFirst(n: any, v: any): Collection;
    getAABB(recursive: any, deep: any): any;
    getPaintedAABBInLayer(): Rectangle;
    getChildrenAABB(recursive: any, deep: any): Rectangle;
    getRoot(): this;
    /**
     * 将一个stage坐标转换到本地坐标系
     * @param {Number} x
     * @param {Number} y
     * @return {Object} {x:Number, y:Number}
     */
    stageToLocalXY(x: any, y: any): any;
    /**
     * 将一个本地坐标转到stage坐标系
     * @param {Number} x
     * @param {Number} y
     * @return {Object} {x:Number, y:Number}
     */
    toStageXY(x: any, y: any): any;
    /**
     * 将一个本地坐标转到Layer坐标系
     * @param {Number} x
     * @param {Number} y
     * @return {Object} {x:Number, y:Number}
     */
    toLayerXY(x: any, y: any): any;
    toObjectLocalXY(x: any, y: any, object: any): any;
    getProtoDefaultProperties(): {};
    addInLink(link: any): void;
    addOutLink(link: any): void;
    removeInLink(link: any): void;
    removeOutLink(link: any): void;
    getLinks(): any[];
    getK(segIndex: any, t: any): number;
    getOrigin(): any[];
    getOriginRotation(): number;
    upgradeLinks(): any[];
    changeParent(newParent: any): this;
    /**
     * 是否超出了父节点的矩形区域
     */
    isOutOfParent(): boolean;
    getTopFrozenParent(): any;
    getAncestors(): any;
    isAncestors(child: any): any;
    toIdMap(): any;
    /**
     * 生成json格式的数据
     * @returns {String} json
     */
    toJson(): string;
    toPojo(): any;
    save(): {};
    getState(): {};
    restore(targetState: any): any;
    getStates(): any[];
    _destory(): void;
}
export declare function findSameAncetors(obj1: any, obj2: any): any;
export { DisplayObject as default };
