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
}