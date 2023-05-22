import Point from "./Point";
declare class Rectangle {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    setTo(x?: number, y?: number, width?: number, height?: number): void;
    getRect(): this;
    clone(): Rectangle;
    toString(): string;
    equals(rect: Rectangle): boolean;
    containsRect(rect: Rectangle): boolean;
    contains(x: number, y: number): boolean;
    isIntersectRect(rect: any): boolean;
    getRight(): number;
    getBottom(): number;
    isEmpty(): boolean;
    setToEmpty(point: any): void;
    union(rect: Rectangle): Rectangle;
    getCenter(): {
        x: number;
        y: number;
    };
    getCornerPoints(): Point[];
    static createFromPoints(points: any): Rectangle;
    static normal(center: any, p: any): number[];
}
export { Rectangle as default };
