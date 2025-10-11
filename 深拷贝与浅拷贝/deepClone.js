function deepClone() {
    // 处理基本数据类型和函数
    if (source === null || typeof source !== 'object') {
        return source;
    }

    // 使用WeakMap处理循环引用
    const seen = new WeakMap();

    function clone(obj){
        // 基本数据类型直接返回
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        // 检查是否已经拷贝过（处理循环引用）
        if (seen.has(obj)) {
            return seen.get(obj);
        }

        let result;

        // 处理Date对象
        if (obj instanceof Date) {
            result = new Date(obj.getTime());
            seen.set(obj, result);
            return result;
        }

        // 处理RegExp对象
        if (obj instanceof RegExp) {
            result = new RegExp(obj);
            seen.set(obj, result);
            return result;
        }

        // 处理Map对象
        if (obj instanceof Map) {
            result = new Map();
            seen.set(obj, result);
            obj.forEach((value, key) => {
                result.set(clone(key), clone(value));
            });
            return result;
        }

        // 处理Set对象
        if (obj instanceof Set) {
            result = new Set();
            seen.set(obj, result);
            obj.forEach(value => {
                result.add(clone(value));
            });
            return result;
        }

        // 处理数组
        if (Array.isArray(obj)) {
            result = [];
            seen.set(obj, result);
            for (let i = 0; i < obj.length; i++) {
                result[i] = clone(obj[i]);
            }
            return result;
        }

        // 处理普通对象 - 保持原型链
        const proto = Object.getPrototypeOf(obj);
        result = Object.create(proto);
        seen.set(obj, result);

        // 复制所有属性（包括Symbol属性）组成一个数组
        const allKeys = [
            ...Object.getOwnPropertyNames(obj),
            ...Object.getOwnPropertySymbols(obj)
        ];

        for (const key of allKeys) {
            result[key] = clone((obj)[key]);
        }

        return result;
    }

    return clone(source);
}


// 测试
// 测试数据
// 声明一个unique symbol
const idSymbol = Symbol('id');



const original= {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'gaming'],
    address: {
        city: 'Beijing',
        street: 'Main St'
    },
    date: new Date('2023-01-01'),
    regex: /abc/gi,
    map: new Map([['key1', 1], ['key2', 2]]),
    set: new Set([1, 2, 3]),
    [idSymbol]: 123
};

// 添加循环引用
original.self = original;

// 执行深拷贝
const cloned = deepClone(original);

// 验证拷贝结果
console.log('原对象:', original);
console.log('拷贝对象:', cloned);

// 测试修改不影响原对象
cloned.name = 'Jane';
cloned.hobbies.push('cooking');
cloned.address.city = 'Shanghai';
cloned.map.set('key3', 3);
cloned.set.add(4);

console.log('修改后原对象:', original);
console.log('修改后拷贝对象:', cloned);

// 验证原型链
console.log('原型相同:', Object.getPrototypeOf(original) === Object.getPrototypeOf(cloned));

// 验证循环引用
console.log('循环引用保持:', cloned.self === cloned);






// 简易版本：
// function deepClone(obj, hash = new WeakMap()) {
//   // 处理原始类型或 null
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   // 处理循环引用：如果已经克隆过，则直接返回之前克隆的对象
//   if (hash.has(obj)) {
//     return hash.get(obj);
//   }

//   // 根据 obj 是数组还是对象，初始化复制对象
//   const cloneObj = Array.isArray(obj) ? [] : {};

//   // 存入 weakMap，以处理循环引用
//   hash.set(obj, cloneObj);

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       cloneObj[key] = deepClone(obj[key], hash);
//     }
//   }

//   return cloneObj;
// }
