import Link from './Link';
/**
 * 自动折线
 * @class
 * @extends Link
 */
declare class AutoFoldLink extends Link {
    beginOffsetGap: number;
    endOffsetGap: number;
    absorb: number;
    fold1Offset: any;
    fold2Offset: any;
    centerOffset: any;
    pointOffsets: any;
    _preAngle: any;
    constructor(text: any, start: any, end: any, beginPosition: any, endPosition: any);
    getFold1(a: any, z: any): {
        x: any;
        y: any;
    };
    getFold2(a: any, z: any): {
        x: any;
        y: any;
    };
    getFold1Vec(a: any, z: any): any;
    getFold2Vec(a: any, z: any): any;
    offsetAZHandle(points: any): void;
    updatePoints(): any[];
    getMergedPoints(): any[];
    getWithOffset(p: any, pointIndex: any): any;
    setFold1Offset(dx: any, dy: any): void;
    setFold2Offset(dx: any, dy: any): void;
    setCenterOffset(dx: any, dy: any): void;
    resetOffset(): void;
}
export { AutoFoldLink as default };
