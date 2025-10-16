function deepClone(obj){
  if(obj === null || typeof obj !== 'object') return obj;

  const clone = (obj) => {
    if(obj === null || typeof obj !== 'object') return obj
    
    let result

    //克隆数组
    if(Array.isArray(obj)){
      result = []
      obj.forEach((item) => {
        result.push(clone(item))
      })
      return result
    }
    // 克隆对象
    const proto = Object.getPrototypeOf(obj)
    result = Object.create(proto)
    const keys = [...Object.getOwnPropertyNames(obj),...Object.getOwnPropertySymbols(obj)]
    for(const key of keys){
      result[key] = clone(obj[key])
    }

    return result
  }
  return clone(obj)
}

const obj = {
  a: 1,
  b: [1,2,3],
  c: {
    name: 'zhangsan',
    datas: {
      age: 18,
      height: '180cm'
    }
  }
}
// const cloneObj = Object.assign({}, obj);
const deepcloneObj = deepClone(obj)
console.log(deepcloneObj)
deepcloneObj.b[0] = 100
deepcloneObj.c.datas.age = 100
console.log(deepcloneObj);
console.log(obj);


// const cloneObj = deepClone(obj);
// console.log(Object.getOwnPropertyNames(obj))