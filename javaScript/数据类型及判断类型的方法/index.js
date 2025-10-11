const number = 123;
const string = '123'
const boolean = true;
const nu = null;
const undef = undefined;
const bigInt = BigInt(1234554547247890);
const sym = Symbol('sym');
const obj = { name: 'test', age: 18 };
const arr = [1, 2, 3];

// 1.typeof:
// 缺陷：typeof null 返回 object
// console.log(typeof string) // string
// console.log(typeof number) // number
// console.log(typeof null) // object
// console.log(typeof sym) // symbol
// console.log(typeof bigInt)  // bigint


// 2.instanceof:检查变量是否属于某个构造函数的实例对象
// 因为是通过原型链来判断的，所以不能判断不是通过new关键字创建的基本数据类型(比如number、string、boolean、symbol、bigInt)，
// 也不能精确判断引用类型数据的具体类型arr instanceof Array和obj instanceof Object都为true

// 3.Object.prototype.toString.call()
// 可以精确判断所有·数据类型
// console.log(Object.prototype.toString.call(number)); // "[object Number]"
// console.log(Object.prototype.toString.call(string));
// console.log(Object.prototype.toString.call(boolean));
// console.log(Object.prototype.toString.call(nu));
// console.log(Object.prototype.toString.call(undef));
// console.log(Object.prototype.toString.call(bigInt));
// console.log(Object.prototype.toString.call(sym));
// console.log(Object.prototype.toString.call(obj));
// console.log(Object.prototype.toString.call(arr));


// 4.constructor属性
// 缺陷：null 和 undefined 没有 constructor 属性
// console.log(number.constructor);
// console.log(string.constructor);
// console.log(boolean.constructor);
// // console.log(nu.constructor); 显示没有该属性
// // console.log(undef.constructor); 显示没有该属性
// console.log(bigInt.constructor);
// console.log(sym.constructor);
// console.log(obj.constructor);
// console.log(arr.constructor);

// 5.判断是否为数组
// 缺陷：只能用于判断是否为数组类型数据
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));