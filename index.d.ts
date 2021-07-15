declare module "create-arr" {
    function arr<T>(length: number, value: (index: number) => T): T[];
    function arr<T>(length: number, value: T): T[];

    namespace arr {
        export function r(start: number, length: number, filler: (value: number, index: number) => number): number[];
        export function r(start: number, length: number): number[];
        export function r(length: number): number[];
    }

    export default arr;
}
