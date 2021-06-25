export declare const add: (a: number, b: number) => string | number;
interface Cat {
    name?: {
        firstName: string;
        lastName: string;
        age: number;
    };
}
export declare const getCatName: (cat: Cat, notCat: number) => string | undefined;
export {};
