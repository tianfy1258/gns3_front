import Layout from './Layout';
/**
 * 圆形布局，将多个节点以一个点为圆心排序
 * @class
 */
declare class CircleLayout extends Layout {
    beginAngle: number;
    endAngle: number;
    minRadius: number;
    /**
     *
     * @param {Object} opt {minRadius: 最小半径, beginAngle: 起始角度(弧度)}
     */
    constructor();
    /**
     * 设置最小半径
     * @param {Number} radius 半径
     */
    setMinRadius(radius: any): void;
    /**
     * 设置角度
     * @param {Number} begin 起始角度（弧度）
     * @param {Number} end 结束角度（弧度）
     */
    setAngle(begin: any, end: any): void;
    getLayoutData(nodes: any): any;
    /**
     * 执行布局
     * @param {Array} objects 要被布局的节点对象数组
     */
    doLayout(objects: any): any;
}
export { CircleLayout as default };
