declare class Endpoint {
    className: string;
    target: any;
    /**
   * 端点类型
   */
    type: string;
    /**
     * 偏移量
     */
    offset: any;
    constructor(target: any);
    isDisplayObjectTarget(): any;
    isDisplayObjectId(): boolean;
    toPojo(): {
        className: string;
    } & this;
}
declare class EndpointSegment extends Endpoint {
    t: number;
    segIndex: number;
    constructor(target: any, t: any, segIndex: any);
}
declare class EndpointFixedName extends Endpoint {
    name: string;
    constructor(target: any, name: any);
}
declare class EndpointNearest extends Endpoint {
    constructor(target: any);
}
declare class EndpointFixedPoint extends Endpoint {
    x: number;
    y: number;
    constructor(target: any, x: any, y: any);
}
declare class EndpointFunction extends Endpoint {
    fn: Function;
    constructor(target: any, fn: any);
}
declare function newEndpoint(target: any, positionName: any): Endpoint;
export declare function getEndpointNormal(endpoint: any): any;
export { Endpoint, EndpointFixedPoint, EndpointFixedName, EndpointNearest, EndpointSegment, EndpointFunction, newEndpoint };
