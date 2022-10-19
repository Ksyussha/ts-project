// let age: number = 12
// console.log(age);

// type User = {
//     first_name: string,
//     age: number,
// }


// const user: User = {
//     first_name: 'Alex', 
//     age: 34,
// }

// class User {
//     frist_name: string
//     age: number
//     constructor(frist_name: string, age: number){
//         this.frist_name = frist_name
//         this.age = age
//     }
//     sayHello(){
//         console.log("hi");
        
//     }
// }
// const user = new User('Alex', 31)
// user.sayHello()
// console.log(user);


//product get

// class Product {
//     title:string
//     price: number
//     constructor(title:string, price:number) {
//         this.title = title
//         this.price = price
//     }
//     get priceWithTax() {
//        return this.price + (this.price * 0.15)
//     }
//     priceWithCurrency(currency:string){
//         if (currency === 'KZT') {
//             return this.price * 500
//         }
//         else if (currency === 'GBP') {
//             return this.price / 1.13
//         }
//         else {
//             return this.price
//         }
//     }

// }

// const product = new Product('ipod', 300)
// console.log(product.priceWithTax);


//product get set

// class Product {
//     private _title: string;
//     private _price: number;
//     constructor(title: string, price: number) {
//       this._title = title;
//       if (price >= 1) {
//         this._price = price;
//       } else {
//         throw Error("Invalid value");
//       }
//     }
    
//     get title() {
//       return this._title;
//     }
//     set title(title: string) {
//       this._title = title;
//     }
    
//     get price() {
//       return this._price;
//     }
//     set price(price: number) {
//       if (price >= 1) {
//         this._price = price;
//       } else {
//         throw Error("Invalid value");
//       }
//     }
//   }
  
//   const product = new Product("ipod", 300);
//   product.price = -300;
//   console.log(product.price);


// A 

class A {
    some:string
    constructor(some:string){
        this.some = some 
    }
    sayHello(){
        console.log('hi');
        
    }
}


class B extends A {
    title:string
    constructor(title: string, some:string){
        super(some)
        this.title = title
    }
}

const a = new A('alex');
const b = new B('bob', 'main');

function somef(obj:A) {
    console.log(obj);
    
}
somef(a)
somef(b)

// const a = new A('alex');
// const b = new B('bob', 'main');
// b.sayHello();


// class C {
//     title:string
//     b:B
//     constructor(){
//         this.title = 'third'
//         this.b = new B ('bob' , 'main')
//     }
// }
// const a = new A('alex');
// const b = new B('bob', 'main');
// const c = new C()
// console.log(c);



