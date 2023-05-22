/** 文本位置 */
export type TextPosition = 'lt' | 'ct' | 'rt' | 'lm' | 'center' | 'rm' | 'lb' | 'cb' | 'rb';
/** 连接点 */
export type ConnectPosition = 'lt' | 'ct' | 'rt' | 'lm' | 'center' | 'rm' | 'lb' | 'cb' | 'rb' | 'nearest' | null;
/** 文本对齐 */
export type TextAlign = 'start' | 'end' | 'left' | 'right' | 'center';
/** 文本基线 */
export type TextBaseline = 'top' | 'bottom' | 'middle' | 'alphabetic' | 'hanging';
/** Stage模式 */
export type StageModeType = 'normal' | 'drag' | 'edit' | 'view' | 'select';
/** 鼠标事件 */
export type MouseEventType = 'mousedown' | 'mouseup' | 'mousemove' | 'mouseenter' | 'mouseout' | 'mousewheel' | 'click' | 'dblclick';
export type Direction = 'up' | 'down' | 'left' | 'right';
export type RatioDirection = Direction;
export type LinkDirection = 'horizontal' | 'vertical';
