/**
 * stack是一种遵循先进后出原则的有序集合
 * stack包含push、pop、peek、isEmpty、clear、size方法
 */

class Stack {
  constructor () {
    this.items = []
  }
  // 向栈内部添加元素
  push (item) {
    return this.items.push(item)
  }
  // 从栈的顶部移除元素
  pop () {
    return this.items.pop()
  }
  // 返回栈顶的元素
  peek () {
    return this.items[this.items.length - 1]
  }
  // 判断栈是否为空
  isEmpty () {
    return this.items.length === 0
  }
  // 清楚栈里面的所有元素
  clear () {
    this.items = []
    return this.items
  }
  // 查看栈的大小
  size () {
    return this.items.length
  }
}