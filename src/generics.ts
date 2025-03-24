const scrore: Array<number> = [];
const names: string[] = [];


function identityOne(val: boolean | number): boolean | number {
    return val;
}


function identityTwo(val: any): any {
    return val;
}


function identityThree<Type>(val: Type): Type{
    return val;
}


identityThree(true);

function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({ brand: 'ABC', type: 1 })


function getSearchProduct<T>(product: T[]): T {
    // do some database operation
    return product[3];
}

const getMoreSearchProducts = <T>(product: T[]): T => {
    // do some database operation
    return product[3];
}

interface Database {
    connection: string,
    username: string,
    password: string
}


function anotherFunction<T, U>(valueOne: T, valueTwo: U): object{
    return {
        valueOne,
        valueTwo
    }
}

anotherFunction(3, "4");