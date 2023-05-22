import Layout from "./Layout";
/**
 * 网格布局
 * @class GridLayout
 * @param {Number}  rows 行数
 * @param {Number}  cols 列数
 * @extends Layout
 */
declare class GridLayout extends Layout {
    rows: number;
    cols: number;
    constructor(rows: any, cols: any);
    /**
     * 设置行、列
     * @param {Number} rows 行
     * @param {Number} cols 列
     */
    setSize(rows: any, cols: any): this;
    getLayoutData(objects: any): any;
    /**
     * 执行布局
     * @param {Array} nodes 要被布局的节点对象数组
     */
    doLayout(nodes: any): any;
}
export { GridLayout as default };
