/**
 * queue遵循先进先出原则的有序集合
 */
class Queue {
  constructor () {
    this.items = []
  }
  // 向队列添加元素
  enqueue (...args) {
    return this.items.push(...args)
  }
  // 删除队列的第一个元素
  dequeue () {
    return this.items.shift()
  }
  // 返回队列中的第一个元素
  front () {
    return this.items[0]
  }
  // 检查队列是否为空
  isEmpty () {
    return this.items.length === 0
  }
  // 返回队列的长度
  size () {
    return this.items.length
  }
}