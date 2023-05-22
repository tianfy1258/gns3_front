import Node from './Node';
/**
 * 文本节点
 * <pre style="font-size:12px;">
// 示例
var textNode = new TextNode('This is a\nTextNode with \ntext warp.', 81, 283);

// 节点的尺寸随文本内容自动调整
textNode.autoSize = true;

textNode.css({
    padding: 5,
    lineHeight: 12,
    border: 'solid 2px #E1E1E1',
    font: 'italic 12px arial',
    color: 'rgba(0, 154, 147,1)'
});
 </pre>
 * @class
 * @extends Node
 */
declare class TextNode extends Node {
    /**
    * 节点的尺寸是否随文本自动变化，默认：true
    * <p>当false时，需要明确指定节点的尺寸</p>
    */
    autoSize: boolean;
    /**
     * 自动调整方向，防止文字头向下
     **/
    autoDirection: boolean;
    constructor(text?: string, x?: number, y?: number, w?: number, h?: number);
    calcTextPosition(): any;
    draw(ctx: any): void;
}
export { TextNode as default };
