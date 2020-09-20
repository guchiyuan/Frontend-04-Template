学习笔记
## 语言通识
+ 用产生式定义语言
+ 语言的分类

## JS类型
+ 七大类型：Number, String, Boolean, Object,Null,Undefined, Symbol
+ typeof的值：number，string, boolean, object, object, undefined, function
+ 编程规范，用void 0 代替 undefined。因为undefined不是js关键字而是一个变量，为了防止被篡改。
+ null是关键字，可以放心使用。
+ 
#### Number
+ 0.toString 会报错，要用0 .toString。因为0.被认定为一个合法的十进制数
+  Number，为什么0.1+0.2！= 0.3
+ 正确的比较方法
```
  console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);
```

#### String
+ 字符串的编码方式，例如UTF-8,一个字有可能是1位，2位或者3位字节构成。
+ String的长度，2^53 - 1，基于编码长度
## JS对象

+ 对象属性时kv对
+ key: String || Symbol
+ value: data 数据属性 || accessor 访问器属性
+ data atrribute:
  + [[value]]
  + writebale
  + enumeralble
  + configarable
+ accessor atrribute:
  + get
  + set
  + enumeralble
  + configarable