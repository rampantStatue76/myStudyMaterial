// /**
//  * 1-原型链继承
//  * 子类型的原型为父类型的一个实例对象
//  *
//  */
// function Parent() {
//   this.colors = ["red", "blue", "green"];
// }
// Parent.prototype.getColors = function () {
//   console.log(this.colors);
// };

// function Child() {
//   this.name = "child";
// }
// Child.prototype = new Parent();

// // 验证是否功能继承
// const child1 = new Child();
// child1.getColors();

// // 缺陷：
// // 1. 引用类型的属性会被所有实例共享
// const child2 = new Child();
// child2.colors.push("yellow");

// child1.getColors();
// child1.getColors();


/**
 * 2-构造函数继承
 * 子类型的构造函数中调用父类型的构造函数
 * 优点：相较于原型继承 不会出现引用类型的属性会被所有实例共享的问题
 * 缺点：不能继承父类型的原型上的属性和方法
 */
// function Parent() {
//     this.colors = ["red", "blue", "green"];
// }
// Parent.prototype.getColor = function (){
//     console.log(this.colors)
// }

// function Child() {
//     this.name ='child'
//     Parent.call(this)
// }

// const child1 = new Child()
// console.log(child1.name,child1.colors,child1.getColor) 
// //输出：child [ 'red', 'blue', 'green' ] undefined

// const child2 = new Child()
// child2.colors.push('yellow')
// console.log(child2.colors) 
// console.log(child1.colors);