import Link from './Link';
/**
 * 弧线
 * @class
 * @extends Link
 */
declare class ArcLink extends Link {
    direction: any;
    constructor(text: any, start: any, end: any, beginPosition: any, endPosition: any);
    drawPoints(ctx: any, points: any): void;
    getPoint(rate: any): {
        x: number;
        y: number;
    };
}
export { ArcLink as default };
