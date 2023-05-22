import { Direction } from '../jtopo_type';
import Layout from './Layout';
/**
 * 树状布局
 */
declare class TreeLayout extends Layout {
    direction: Direction;
    constructor(direction: Direction);
    /**
     * 设置方向
     * @param direction
     * @returns
     */
    setDirection(direction: Direction): this;
    /**
     * 执行布局
     * @param {VirtualTree} tree 要布局的虚拟树
     * @return {Promise}
     */
    doLayout(tree: any): any;
    translateObject(tree: any): any;
}
export { TreeLayout as default };
