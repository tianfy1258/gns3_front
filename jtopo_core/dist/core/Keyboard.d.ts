import EventTarget from "../events/EventTarget";
import Stage from "./Stage";
/**
 * 键盘抽象
 */
declare class Keyboard extends EventTarget {
    debug: boolean;
    regMap: any;
    keyMap: any;
    stage: Stage;
    preKeydownEvent: any;
    constructor(stage: any);
    /**
     *
     * 绑定按键
     * @param {String} keyInfo 例如"Control+a" 、"Meta+a"、 ”G" 、”Shift+1“
     * @param {Function} callback 触发处理函数
     * @param {Boolean} needMouseOnStage true: 鼠标在画布上时才生效 fase: 始终生效
     */
    bindKey(keyInfo: any, fn: any, needMouseOn: any): void;
    /**
     * 解绑按键
     * @param {String} keyInfo 例如"Control+a" 、"Meta+a"、 ”G" 、”Shift+1“
     * */
    unBind(keyInfo: any): void;
    /**
     * 指定的单个键是否按下
     * @param {String} keyInfo
     * @returns {Boolean}
     */
    isKeydown(keyInfo: any): any;
    sendKey(keyStr: any, event: any): void;
    isMouseOnInputDomElement(): boolean;
    fireKey(keyArray: any, event: any, isMouseOn: any): void;
    keydownHandler(event: any): void;
    keyupHandler(event: any): void;
    init(): void;
}
export { Keyboard as default };
