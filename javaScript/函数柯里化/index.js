// 函数柯里化是指将一个接收多个参数的函数，转换成一系列使用一个参数的函数的过程。
// const nameList = [
//     {mid: '秦', profession: 'actor'},
//     {mid: '王', profession: 'actor'},
//     {mid: '李', profession: 'actor'},
// ]
// const nameList1 = [
//     {abc:'你',profession: 'person'},
//     {abc:'好',profession: 'person'},
//     {abc:'吗',profession: 'person'}
// ]

// // const curring = name => element => element[name]
// function curring (name){
//     return function(element) {
//         return element[name]
//     }
// }
// const name_mid = curring('mid')
// const name_abc = curring('abc')

// console.log( nameList.map( name_mid ));
// console.log(nameList1.map(name_abc));


// 实现一个add函数，使下面的调用结果符合预期
// console.log(add(1)(2)(3)); //6
// console.log(add(1)(2)); //3
// function add() {
//     let args = Array.prototype.slice.call(arguments);
//     let sum = 0
//     if(args.length === 3) {
//         return args.reduce((acc, val) => acc + val, 0);
//     }
    
// }

// console.log(add(1,2,3));
// console.log(add(1)(2)(3));

function addLen(len){
    let arr = []
    return function add(...args){
        arr.push(...args)
        if(arr.length === len) {
            let sum = arr.reduce((acc, val) => acc + val, 0);
            arr = []
            return sum
        }else {
            return add
        }
    }
}
const addTree = addLen(3)
// console.log(addTree(1)(2,3));
// console.log(addTree(4,3)(1));

let arr = []
function add(...args){
    arr.push(...args)
    if(arr.length === 3){
        let sum = arr.reduce((acc, val) => acc + val, 0);
        arr = []
        return sum
    }else {
        return add
    }
}
console.log(add(5)(1,9));