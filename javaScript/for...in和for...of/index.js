// for...of 循环只能用于可迭代对象，比如数组、字符串、Map、Set等值(不可以用来遍历普通对象)
const arr = ['n', 'i', 'h', 'a', 'o']
for(let item of arr){
    console.log(item)
}

console.log('-------------------------');
// for...in 会遍历所有可枚举属性，包括原型链上的属性
function Person(name){
    this.name = name
}
Person.prototype.age = 18

const person = new Person('张三')
for(let key in person){
    console.log(key)
}
console.log('-------------------------');
console.log(Object.keys(person));

console.log("-------------------------");
for(let i in arr){
    console.log(i);
}