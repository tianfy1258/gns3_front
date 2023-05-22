import { LinkDirection } from '../jtopo_type';
import Link from './Link';
/**
 * 弧线
 * @class
 * @extends Link
 */
declare class CurveLink extends Link {
    ctrlPoint: any;
    _ctrlPoint: any;
    /**
     * 方向，有垂直、水平两种 取值为：'horizontal' 或者 'vertical' ，默认为 'horizontal'
     */
    direction: LinkDirection;
    constructor(text: any, start: any, end: any, beginPosition: any, endPosition: any);
    drawPoints(ctx: any, points: any): void;
    mousedragHandler(event: any): void;
    /**
     * 获取控制点的坐标
     * @returns {Object} 一个点坐标，如：{x:10, y:10}
     */
    getCtrlPoint(a: any, z: any): any;
    getPoint(t: any): any;
    resetCtrlPoint(): void;
}
export { CurveLink as default };
