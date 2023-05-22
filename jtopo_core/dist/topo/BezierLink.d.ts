import Link from './Link';
/**
 * 贝塞尔
 * @class
 * @extends Link
 */
declare class BezierLink extends Link {
    ctrlPoint1: any;
    ctrlPoint2: any;
    private _ctrlPoint1;
    private _ctrlPoint2;
    constructor(text: any, start: any, end: any, beginPosition: any, endPosition: any);
    mousedragHandler(event: any): void;
    drawPoints(ctx: any, points: any): void;
    calcCtrlPoint1(a: any, z: any): any;
    calcCtrlPoint2(a: any, z: any): any;
    resetCtrlPoint(): void;
    getPoint(rate: any, segIndex: any): any;
}
export { BezierLink as default };
