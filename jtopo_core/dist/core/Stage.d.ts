import DisplayObject from './DisplayObject';
import Collection from './Collection';
import EventTarget from '../events/EventTarget';
import Toolbar from '../ui/Toolbar';
import MouseInfo from './EventDetails';
import Keyboard from './Keyboard';
import SelectedGroup from './SelectedGroup';
import Overview from './Overview';
import { StageModeType } from '../jtopo_type';
/**
 * 顶层场景对象，下面可以有多个Layer, 一个Layer可以充当一个场景
 * <p>创建时需要一个dom对象，通常是一个div，来作为渲染目标。</p>
 * @class Stage
 */
declare class Stage extends EventTarget {
    domId: string | HTMLElement;
    domElement: HTMLElement;
    keyboard: Keyboard;
    editor?: any;
    /**
     * 加入Stage的Layer集合
     */
    children: Collection;
    mouseInfo: MouseInfo;
    /**
     * 当前选中的对象组
     */
    selectedGroup: SelectedGroup;
    /**
     * 缩略图对象
     */
    overview: Overview;
    private _overviewTimer;
    /**
    * 工具条-ts
    * @type {Toolbar}
    */
    toolbar: Toolbar;
    width: number;
    height: number;
    visible: boolean;
    private handlerLayer;
    private randomNum;
    private exportRender;
    layersContainer: HTMLElement;
    /** 当前鼠标坐标-x（canvas上的） */
    mouseX: number;
    /** 当前鼠标坐标-y（canvas上的） */
    mouseY: number;
    /** 当前鼠标按下时的坐标-x（canvas上的） */
    mouseDownX: number;
    /** 当前鼠标按下时的坐标-y（canvas上的） */
    mouseDownY: number;
    mode: StageModeType;
    /**
     * 鼠标选中的对象
     * */
    pickedObject: DisplayObject | null;
    /**
     * 当前鼠标指向的对象
     */
    mouseoverTarget: DisplayObject | null;
    /**
     * 鼠标缩放开关
     */
    wheelZoom: boolean;
    /** 是否已经销毁 */
    destoryed: boolean;
    private resizeObserver?;
    private resizeTimer;
    private needRepaint;
    private canvasOffset;
    /**
     * 一个Dom节点对象或者一个dom的ID
     * @param {string} domOrId or id
     */
    constructor(dom_id: string | HTMLElement);
    init(): void;
    /**
     * 显示缩略图 （所在div的css属性position为 absolute）
     * <pre>
     * 可通过css样式来定位，例如：
    stage.showOverview({
        left: 0,
        bottom: -1
    });
     * </pre>
     * @param {Object} styles
     */
    showOverview(styles: any): void;
    updateOverview(): void;
    /**
     * 隐藏缩略图
     */
    hideOverview(): void;
    /** 获取工具栏高度 */
    getToolbarHeight(): number;
    /**
     * 缩小到0.8
     */
    zoomOut(scaleX: any): this;
    /**
     * 放大到1.25
     */
    zoomIn(s: any): this;
    /**
     * 指定坐标为中心，进行缩放
     * <p>会抛出zoom事件, 可捕获,如：</p>
     * <pre>
     * stage.on('zoom', (event)=>{
     *      event.preventDefault(); // 阻止缩放
     * })
     * </pre>
     * @param {number} x 缩放中心的x坐标
     * @param {number} y 缩放中心的y坐标
     * @param {number} cx 水平方向的缩放系数
     * @param {number} cy 垂直方向的缩放系数
     */
    zoom(x: any, y: any, cx?: number, cy?: number): void;
    /**
     * 取消缩放和layer的偏移量
     */
    cancelZoom(): void;
    /**
     * 缩放到画布1：1并居中
     */
    zoomFullStage(): void;
    /**
     * 居中显示
     */
    translateToCenter(): void;
    /**
     * 加入一个Layer
     * @param {Layer} layer
     */
    addChild(layer: any): void;
    /**
     * 获取所有子节点(所有Layer构成的数组)
     * @returns {Array}
     */
    getChildren(): Collection;
    /**
     * 移除一个Layer
     * @param {Layer} layer
     */
    removeChild(layer: any): void;
    /**
     * 显示
     */
    show(): void;
    /**
     * 全部不可见
     */
    hide(): void;
    /**
     * 更新，重绘一次
     */
    update(): void;
    forceUpdate(): void;
    exportPaint(): void;
    saveImageInfo(): this;
    /**
     * 导出图片
     */
    saveAsLocalImage(): void;
    /**
     * 增加事件监听, 例如： stage.on('mouseup', (event)=> {})
     * @param {string} type
     * @param {Function} callback
     */
    on(type: any, callback: any): void;
    /**
     * 在浏览器内全屏
     */
    fullWindow(): void;
    /**
     * 整个显示器全屏, 抛出fullScreen事件
     */
    fullScreen(): void;
    /**
     * 显示工具条
     */
    showToolbar(): void;
    /**
     * 隐藏工具条
     */
    hideToolbar(): void;
    setToolbar(toolbar: any): void;
    /**
     * 设置场景模式,模式有：normal（默认值)、select(框选)、edit(编辑)、drag(拖拽)
     *
     * 触发 'modeChange'事件，可捕获
     * @param {string} mode 场景模式
     */
    setMode(mode: any): void;
    /**
     * 获取鼠标在场景中的坐标{x,y}
     */
    getMousePoint(): {
        x: number;
        y: number;
    };
    /**
     * 获取鼠标在场景中按下时的坐标{x,y}
     */
    getMouseDownPoint(): {
        x: number;
        y: number;
    };
    mousedownHandler(event: any): void;
    mousedragHandler(event: any): void;
    mouseupHandler(event: any): void;
    mouseoutHandler(event: any): void;
    clickHandler(event: any): void;
    dblclickHandler(event: any): void;
    mousemoveHandler(event: any): void;
    mousewheelHandler(event: any): void;
    mouseenterHandler(event: any): void;
    touchstartHandler(event: any): void;
    touchmoveHandler(event: any): void;
    touchwheelHandler(event: any): void;
    touchendHandler(event: any): void;
    pickUpViewLayers(pickMouseDisabled?: boolean): any;
    /**
     * 获取当前光标, 相当于读取: cavnas.style.cursor;
     */
    getCursor(): string;
    /**
     * 设置光标, 相当于: cavnas.style.cursor = cursor;
     * @param {string} cursor
     */
    setCursor(cursor: any): void;
    /**
     * 下载为json文件
     * @param {String} fileName
     */
    download(fileName: any): void;
    select(objects: any): void;
    /**
     * 获取当前可见的第一个Layer，默认是第一个
     */
    getCurrentLayer(): any;
    /**
     * 销毁（移除Dom元素、停止渲染循环）
     */
    destory(cleanCache: any): void;
}
export { Stage as default };
