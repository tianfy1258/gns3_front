import { LinkDirection } from '../jtopo_type';
import Link from "./Link";
/**
 * 二次折线
 * @class
 * @extends Link
 */
declare class FlexionalLink extends Link {
    /**
     * 方向，有垂直、水平两种 取值为：'horizontal' 或者 'vertical' ，默认为 'horizontal'
     */
    direction: LinkDirection;
    private offsetGap;
    constructor(text: any, start: any, end: any, beginPosition: any, endPosition: any);
    getFold1(a: any, z: any): {
        x: any;
        y: any;
    };
    getFold2(a: any, z: any): {
        x: number;
        y: any;
    } | {
        x: any;
        y: number;
    };
    offsetAZHandle(points: any): void;
    updatePoints(): any[];
}
export { FlexionalLink as default };
