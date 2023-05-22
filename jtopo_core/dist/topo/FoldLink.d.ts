import Point from '../core/Point';
import { LinkDirection } from '../jtopo_type';
import Link from "./Link";
/**
 * 折线
 * @class
 * @extends Link
 */
declare class FoldLink extends Link {
    /**
     * 方向，有垂直、水平两种 取值为：'horizontal' 或者 'vertical' ，默认为 'horizontal'
     */
    direction: LinkDirection;
    constructor(text: any, begin: any, end: any, beginPosition: any, endPosition: any);
    offsetAZHandle(points: any): void;
    updatePoints(): Point[];
}
export { FoldLink as default };
