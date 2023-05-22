/**
 * 事件对象, 可以监听和分发事件
 */
declare class EventTarget {
    listeners: any;
    constructor();
    /**
     * 是否有该类型的监听
     * @param {string} type
     */
    hasListener(type: any): boolean;
    /**
     * 增加事件监听
     * @param {String} type 事件类型
     * @param {Function} callback
     */
    addEventListener(type: any, callback: any): void;
    /**
     * 移除一个事件监听
     * @param {String} type
     * @param {Function} callback
     */
    removeEventListener(type: any, callback: any): any;
    /**
     * 分发事件
     * @param {Object} event
     */
    dispatchEvent(event: any): void;
    /**
     * 增加监听事件, 功能完全等同于addEventListener，一种简写
     * @param {string} type 事件类型
     * @param {fucntion} callback 事件处理函数
     */
    on(type: any, callback: any): void;
}
export { EventTarget as default };
