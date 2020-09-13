学习笔记
## js类型
1. 7个类型
```
Undefined；Null；Boolean；String；Number；Symbol；Object。
```
- 编程规范，用void 0 代替 undefined。因为undefined不是js关键字而是一个变量，为了防止被篡改。
- null是关键字，可以放心使用。
2. String的长度，2^53 - 1，基于编码长度
3. Number，为什么0.1+0.2！= 0.3
- 正确的比较方法
```
  console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);
```