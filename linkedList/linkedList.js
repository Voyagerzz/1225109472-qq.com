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
}