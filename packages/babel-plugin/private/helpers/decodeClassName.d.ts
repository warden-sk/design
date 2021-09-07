export declare type DecodedClassName = string;
export declare type EncodedClassName = EncodedClassName[] | boolean | null | number | string | undefined | {
    [decodedClassName: string]: boolean | null | undefined;
};
declare function decodeClassName(...encodedClassNames: EncodedClassName[]): DecodedClassName | undefined;
export default decodeClassName;
