export const add = (a: number, b: number) => {
    if (a > 0) {
        return a + b;
    }
    return '' + a + b;
}

interface Cat {
    name?: {
        firstName: string;
        lastName: string;
        age: number;
    }
}

// noUnusedParameters
export const getCatName = (cat: Cat, notCat: number) => {
    return cat.name && cat.name.firstName;
}
