import Stage from '../core/Stage';
/**
 * 工具条
 * <p> 通过按钮触发来调用stage的方法来完成下面的功能: </p>
 * <p> 设置操作模式（默认、框选、编辑、拖拽、查看、锁定） </p>
 * <p> 控制放大、缩小、居中、导出 等</p>
 */
declare class Toolbar {
    stage: Stage;
    domObj: HTMLElement;
    buttons: NodeListOf<HTMLButtonElement>;
    fileInput: HTMLElement;
    /**
     * @param {Stage} stage
     */
    constructor(stage: Stage);
    /**
     * 隐藏或显示某个按钮
     * @param title 按钮元素的title属性
     */
    toggleButton(title: string): void;
    getDom(): HTMLElement;
    /**
     * 显示
     */
    show(): void;
    /**
     * 隐藏
     */
    hide(): void;
    remove(): void;
    /** 获取工具高度 */
    getHeigth(): number;
    initActiveStatus(): void;
    initToolbar(stage: any, html: any): void;
    activeBtn(btn: any): void;
    removeAllActive(group: any): void;
}
export { Toolbar as default };
