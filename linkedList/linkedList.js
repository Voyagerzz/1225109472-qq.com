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
    if (Number.isInteger(position) && position > -1 && position < this.length) {
      let current = this.head
      let index = 0
      let newHead
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
      // 新的前置节点
      const preNode = new Node(nextNode.element)
      // 删除原链表中被前置的节点
      current.next = nextNode.next
      preNode.next = linkList.head || current
      linkList.head = preNode
    }
    this.head = linkList.head
    return this.head
  }
}