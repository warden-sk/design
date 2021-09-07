export declare type DecodedResponsiveClassName = string;
export declare type EncodedResponsiveClassName<T extends number | string> = T | [T, {
    [breakpointName: string]: T;
}] | [T] | {
    [breakpointName: string]: T;
};
declare function decodeResponsiveClassName($: string, encodedResponsiveClassName?: EncodedResponsiveClassName<number | string>): DecodedResponsiveClassName[];
export default decodeResponsiveClassName;
