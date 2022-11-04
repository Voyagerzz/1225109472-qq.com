class ListkedNode {
    constructor (value, next = null) {
        this.value = value
        this.next = next
    }
}
class LinkedList {
    constructor () {
        this.head = null
        this.tail = null
    }
    append(value) {
        const newNode = new ListkedNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return this
        }
        this.tail.next = newNode
        this.tail = newNode
        return this
    }
    prepend(value) {
        const newNode = new ListkedNode(value, this.head)
        this.head = newNode
        if (!this.tail) {
            this.tail = newNode
        }
        return this
    }
    insert(value, rawIndex) {
        const index = rawIndex < 0 ? 0 : rawIndex
        if (index === 0) {
            this.prepend(value)
        } else {
            let count = 1
            const newNode = new ListkedNode(value)
            let currentNode = this.head
            while(currentNode) {
                if (count === index) break;
                currentNode = currentNode.next
                count++
            }
            if (currentNode) {
                newNode.next = currentNode.next
                currentNode.next = newNode
            } else {
                if (this.tail) {
                    this.tail.next = newNode
                    this.tail = newNode
                } else {
                    this.head = newNode
                    this.tail = newNode
                }
            }
        }
        return this
    }
    delete(value) {
        if (!this.head) return null;
        let deleteNode = null
        while(this.head && this.head.value === value) {
            // 如果头部节点符合被删除的要求，则将头部节点赋值成原头部节点的next值
            this.head = this.head.next
            deleteNode = this.head
        }
        let currentNode = this.head
        if (currentNode) {
            while(currentNode.next) {
                if (currentNode.next.value === value) {
                    deleteNode = currentNode.next
                    currentNode = currentNode.next.next
                } else {
                    currentNode = currentNode.next
                }
            }
        }
        if (this.tail.value === value) {
            this.tail = currentNode
        }
        return deleteNode
    }
    shift() {
        if (!this.head) return null
        let deleteNode = this.head
        this.head = this.head.next
        // 删完之后，update tail节点
        if (!this.head) {
            this.tail = null
        }
        return deleteNode
    }
    pop() {
        if (!this.head) return null
        let deleteNode = null
        let currentNode = this.head
        if (!currentNode.next) {
            deleteNode = this.head
            this.head = null
            this.tail = null
            return deleteNode
        }
        while(currentNode.next) {
            // 如果currentNode的next节点的next节点为空
            // 说明currentNode.next 是最后一个节点
            if (currentNode.next.next === null) {
                deleteNode = currentNode.next
                currentNode.next = null
                this.tail = currentNode
            } else {
                currentNode = currentNode.next
            }
        }
        return deleteNode
    }
    reverse() {
        let newHead = null
        let node = null
        while(this.head) {
            if (!newHead) {
                newHead = this.pop()
                node = newHead
            } else {
                const deleteNode = this.pop()
                node.next = deleteNode
                node = deleteNode
            }
        }
        this.head = newHead
        this.tail = node
        return this
    }
    reverse2() {
        let curNode = this.head
        let preNode = null
        while(curNode) {
            const nextNode = curNode.next
            curNode.next = preNode
            preNode = curNode
            curNode = nextNode
        }
        this.tail = this.head
        this.head = preNode
        return this
    }
}