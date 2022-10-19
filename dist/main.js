class A {
    constructor(some) {
        this.some = some;
    }
    sayHello() {
        console.log('hi');
    }
}
class B extends A {
    constructor(title, some) {
        super(some);
        this.title = title;
    }
}
class C {
    constructor() {
        this.title = 'third';
        this.b = new B('bob', 'main');
    }
}
const a = new A('alex');
const b = new B('bob', 'main');
const c = new C();
console.log(c);
//# sourceMappingURL=main.js.map