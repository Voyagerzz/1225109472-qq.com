class Node {
  constructor (key) {
    this.key = key
    this.left = null
    this.right = null
  }
}
class BinaryTree {
  constructor () {
    this.root = null
  }
  insertNode (node, newNode) {
    if (node.key < newNode.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  insert (key) {
    const newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  inOrderTraverseTree (callBack) {
    this.inOrderTraverseNode(this.root, callBack)
  }
  inOrderTraverseNode (node, callBack) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callBack)
      callBack(node.key)
      this.inOrderTraverseNode(node.right, callBack)
    }
  }
}