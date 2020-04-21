class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}
class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }
  append (element) {
    const node = new Node(element)
    let currentNode = null
    if (!this.head) {
      this.head = node
    } else {
      currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }
    this.length++
  }
  remoteAt (position) {
    let current = this.head
    let index = 0
    let newHead
    if (position > -1 && position < this.length) {
      if (position === 0) {
          this.head = current.next
        } else {
          while (index++ < position) {
            newHead = current
            current = current.next
          }
          newHead.next = current.next
        }
      this.length--
      return current.element
    } else {
      return null
    }
  }
  reverse () {
    let current = this.head
    const linkList = {}
    while (current.next) {
      const nextNode = current.next
      // 将后置节点的值放到新的前置节点
      const preNode = new Node(nextNode.element)
      // 将后置节点的值改为原始的前置节点的值, 后置节点的next保持不变
      // 如果后置节点的next不为null，则继续反转
      if (nextNode.next) {
        nextNode.element = current.element
        current = nextNode
      } else {
        current.next = null
      }
      preNode.next = linkList.head || nextNode
      linkList.head = preNode
    }
    this.head = linkList.head
  }
}