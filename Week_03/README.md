#学习笔记

## 字符串的算法分析

#### 字典树
1. 一种特殊的hash树
2. Object或Map适合用来建trie树
3. 可用于获取出现最多字符串
4. in操作符

```
const params = {id:'dd'}
id in params // return true
```

#### kmp算法
1. pattern自重复跳转表的实现
2. pattern和source的匹配
3. 双指针，数组循环遍历比较

#### wildcard算法
1. 增加*和？通配符
2. 先考虑只有*或者只有？的情况 
3. 先找所有*
4. 处理边缘case
5. 分段处理每一个subPattern
优化：正则的匹配可以用带？的kmp替代

## reactive的手动实现

1. Map数据结构的基本操作

```
Map对象类型，相对于Object的优势是，key值可以为任何值，不一定是Symbol或字符串。
当需要一个字典结构时，多使用Map

let callbacks = new Map()

callbacks.has(prop)
callbacks.get(prop)
callbacks.set(prop,[])
```
2. proxy代理的使用
- 可以监听到所用到的变量

```
let po = new Proxy(object, {
  set(obj, prop, val) {
    console.log(obj, prop, val);
  },
});
```


## 文本流中的拖拽

1. 各种事件的监听，mousedown,mouseup,mousemove,selectstart
2. range的使用，document.createRange().getBoundingClientRect()
3. 最近range的查询，采用距离最小法。

