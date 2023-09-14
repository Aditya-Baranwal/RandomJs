
const DoublyLinkedListNode = require('./DoublyLinkedListNode');

class DoublyLinkedList {
    
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(value) {
        if(this.head == null) {
            this.head = new DoublyLinkedListNode(value, null, null);
            this.tail = this.head;

        } else {
            this.tail.next = new DoublyLinkedListNode(value, this.tail, null)
            this.tail = this.tail.next;
        }
        return this.tail;
    }

    insertAtIndex(value, position) {
        try {
            if(position < 0) return;
            let currentNode = this.head, currentIndex = 0;
            while(currentIndex < position && currentNode != null) {
                currentNode = currentNode.next;
                ++currentIndex;
            }

            if(currentNode != null) {
               if(currentNode.previous == null) {
                this.head = new DoublyLinkedListNode(value, null, currentNode);
                currentNode.previous = this.head;
                return this.head;
               }
               let tempNode = new DoublyLinkedListNode(value, currentNode.previous, currentNode);
               currentNode.previous.next = tempNode;
                currentNode.previous = tempNode;
               return tempNode;
            } 
            return this.insert(value);
        } catch(error) {
            throw error;
        }
    }

    delete(value) {
        try {
            if(this.head == null) return;
            let currentNode = this.head;
            while(currentNode != null) {
                if(currentNode.value == value) {
                    if(currentNode != null) {
                        if(currentNode.previous == null) {
                            this.head == currentNode.next;
                            currentNode.next.previous = null;
                        } else if(currentNode.next == null) {
                            this.tail = this.tail.previous;
                            this.tail.next = null;
                        } else {
                            currentNode.previous.next = currentNode.next;
                            currentNode.next.previous = currentNode.previous; 
                        }
                    }
                    break;
                } 
                currentNode = currentNode.next;
            }
        } catch(error) {
            throw error;
        }
    }

    deleteAtIndex(position) {
        if(position < 0) return;
        let currentNode = this.head, currentNodeIndex = 0;
        while(currentNodeIndex < position && currentNode != null) {
            currentNode = currentNode.next;
            ++currentNodeIndex;
        }
        if(currentNode != null) {
            if(currentNode.previous == null) {
                this.head = currentNode.next;
                this.head.previous = null
            } else if(currentNode.next == null) {
                this.tail = this.tail.previous;
                this.tail.next = null;
            } else {
                currentNode.previous.next = currentNode.next;
                currentNode.next.previous = currentNode.previous
            }
            return;
        }   
        throw new Error("maximum sise reached");
    }

    deleteNode(node) {
        try {
            if(this.head == null) return;
            if(node === this.head) {
                if(this.head.next == null) {
                    this.head = null;
                } else {
                    this.head = this.head.next;
                    this.head.previous = null;
                }
            } else if(node == this.tail) {
                this.tail = this.tail.previous;
                this.tail.next = null;
            } else {
                node.previous.next = node.next;
                node.next.previous = node.previous;
            }
        } catch(error) {
            throw error;
        }
    }

    getByValue(value) {
        if(this.head == null) return;
        let currentNode = this.head;
        while(currentNode != null) {
            if(currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    getByIndex(nodeIndex) {
        let currentNode = this.head, currentNodeIndex = 0;
        if(currentNode == null) return;
        while(currentNodeIndex !== nodeIndex) {
            currentNode = currentNode.next;
            ++currentNodeIndex;
        }
        return currentNode;
    }

    print() {
        let currentNode = this.head;
        while(currentNode != null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

}

module.exports = DoublyLinkedList 