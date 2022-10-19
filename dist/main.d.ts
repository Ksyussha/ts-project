declare class A {
    some: string;
    constructor(some: string);
    sayHello(): void;
}
declare class B extends A {
    title: string;
    constructor(title: string, some: string);
}
declare class C {
    title: string;
    b: B;
    constructor();
}
declare const a: A;
declare const b: B;
declare const c: C;
