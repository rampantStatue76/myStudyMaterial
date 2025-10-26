| 特性     | **Set**                           | **Map**                                    |
| -------- | --------------------------------------- | ------------------------------------------------ |
| 本质     | 一组**唯一值**的集合              | 一组**键值对（key-value）**的集合                |
| 键的类型 | 没有键，只有值（value）                 | key 可以是任何类型（对象、函数等）               |
| 是否去重 | ✅ 自动去重                             | ❌ 不去重（key 唯一）                            |
| 访问方式 | 通过 `value`访问                      | 通过 `key`访问                                 |
| 常用方法 | `add`、`has`、`delete`、`clear` | `set`、`get`、`has`、`delete`、`clear` |
| 适合场景 | 去重、集合运算（并集、交集、差集）      | 存储键值映射关系，如缓存、数据字典等             |

## 常见用法对比

**set:**

```javascript
const s = new Set([1, 2, 2, 3]);
console.log(s); // Set(3) {1, 2, 3} ✅ 自动去重

s.add(4);
s.has(2); // true
s.delete(3);
console.log([...s]); // [1, 2, 4]
s.clear()
console.log(s1) // Set(0) {}

```

**map: 键值对**

```javascript


const m = new Map();
m.set('name', '秦晴');
m.set('age', 22);
m.set({ id: 1 }, 'objectKey');

console.log(m.get('name')); // 秦晴
console.log(m.has('age')); // true
m.delete('age');

```

### Set常见用法

```javascript
// 集合运算
const a = new Set([1, 2, 3]);
const b = new Set([3, 4]);

// 交集
const intersection = new Set([...a].filter(v => b.has(v)));
// 并集
const union = new Set([...a, ...b]);
// 差集
const difference = new Set([...a].filter(v => !b.has(v)));

```

### Map常见用法

```javascript
const str = "hello";
const map = new Map();

for (const ch of str) {
  map.set(ch, (map.get(ch) || 0) + 1);
}
console.log(map); // Map(4) {'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1}

```

### Map与普通对象的区别

`Map` 相比普通对象的主要区别是：

* 键可以是任意类型；
* 元素有序；
* 获取数量用 `size`；
* 操作更方便（有 `set/get/has`）；
* 且性能更高、无原型污染。

一般我们在需要存储复杂键或频繁操作数据时，更推荐使用 `Map`。

| 对比项               | `Object`                                          | `Map`                                        |
| :------------------- | :-------------------------------------------------- | :--------------------------------------------- |
| **键的类型**   | 只能是字符串或 Symbol，对象的建会被强制转换为字符串 | 任意类型（包括对象、函数等）                   |
| **键值顺序**   | 无序（ES规范中不保证顺序）                          | 有序（按照插入顺序遍历）                       |
| **默认键**     | 原型链上自带属性（如 `toString`）                 | 无默认键，纯净结构                             |
| **键数量获取** | 需 `Object.keys(obj).length`                      | 直接 `map.size`                              |
| **可迭代性**   | 默认不可迭代（需用 `Object.entries`）             | 天生可迭代（可用 `for...of`）                |
| **性能**       | 针对小量、简单 key 的场景                           | 针对大量、复杂 key 的场景性能更好              |
| **常用方法**   | `Object.keys() / values() / entries()`            | `set() / get() / has() / delete() / clear()` |
