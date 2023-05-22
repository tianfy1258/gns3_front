import Layout from "./Layout";
/**
 * 流式布局
 *
 * @class
 * @extends Layout
 */
declare class FlowLayout extends Layout {
    width: number;
    height: number;
    constructor();
    /**
     * 设置最大高度 和 最大宽度，不为null的生效
     * @param {Number|null} width 最大宽度
     * @param {Number|null} height 最大高度
     */
    setSize(width: any, height: any): void;
    getLayoutData(objects: any): any;
    /**
     * 执行布局
     * @alias FlowLayout.prototype.doLayout
     * @param {Array} objects 要被布局的节点对象数组
     */
    doLayout(objects: any): any;
}
export { FlowLayout as default };
