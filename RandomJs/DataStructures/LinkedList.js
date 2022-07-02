const LinkedListNode = require('../DataStructures/LinkedlistNode');


class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(value, position = -1) {
        // list is empty
        if(this.head == null) {
            this.head = new LinkedListNode(value);
        } else {
            
            // add in end
            if(position == -1) {                
                let nextNode = this.head;
                while(nextNode.next != null) {
                    nextNode = nextNode.next;
                }
                nextNode.next = new LinkedListNode(value);
            } else {
                let current = this.head, previous = null, nodeCount = 0;
                
                if(position > this.size) { return this.add(value); }
                
                // position at start
                if(position == 0) {
                    let node = new LinkedListNode(value, this.head);
                    this.head = node;
                } else {
                    
                    // iterate to position
                    while(nodeCount < position) {
                        previous = current;
                        current = current.next;
                        ++nodeCount;
                    }
                    previous.next = new LinkedListNode(value, current);
                }
            }
        }
        ++this.size;
    }

    get(position = -1) {

        if(position > this.size || this.head == null) return null;
        
        if(position == -1 ) position = this.size;
        
        let nodeCount = 0, current = this.head;
        
        while(nodeCount < position) {
            current = current.next;
            ++nodeCount;
        }
        
        console.log(current.value);
        return current.value;
    }

    delete(position = -1) {
        if(this.size === 0) console.log("list is empty");
        
        let current = this.head, prev = null;
        
        if(position == 0) {
            this.head = this.head.next;
            current.next = null;
        } else if(position == -1) {
            while(current.next != null) {
                prev = current;
                current = current.next;
            }
            prev.next = null;
        } else {
            let nodeCount = 0;
            while(nodeCount < position) {      
                prev = current;
                current = current.next;
                ++nodeCount;
            }
            prev.next = current.next;
        }
    
    }

    reverse() {
        let current = this.head, prev = null, next;
        while(current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    reverseUsingRecursion(head = this.head) {
        if(head !== null) {
            let nextNode = head.next;
            head.next = null;
            let tempNode = this.reverseUsingRecursion(nextNode);
            tempNode===null ? this.head = head : tempNode.next = head;
        }
        return head;
    }

    print() {
        let allNodes = [], currentNode = this.head;
        while(currentNode != null) {
            allNodes.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(...allNodes);
    }

    midPoint(list = this.head) {
        
        if(list === null) {
            console.log("list is Empty");
            return;
        }
                
        let n1 = list, n2 = list;

        while(n2 && n2.next != null && n2.next.next != null) {
            n2 = n2.next.next;
            n1 = n1.next;
        }

        return n1; 
    }

    #merge(head1, head2) {

        let temp1 = head1, temp2 = head2, sorted = null, current;

        while(temp1 != null && temp2 != null) {            
            if(temp1.value < temp2.value) {
                if(sorted == null) {
                    sorted = temp1;
                } else {
                    current.next = temp1;
                }
                current = temp1;
                temp1 = temp1.next;
            } else {
                if(sorted == null) {
                    sorted = temp2;
                } else {
                    current.next = temp2;
                }
                current = temp2;
                temp2 = temp2.next;
            }
        }

        if(temp1) current.next = temp1;

        if(temp2) current.next = temp2;

        return sorted;

    }

    #sortUtil(start) {        
        if(start.next !== null) {
            let mid = this.midPoint(start);
            let temp = mid.next;
            mid.next = null;
            let right  = this.#sortUtil(start);
            let left = this.#sortUtil(temp)
            let sorted = this.#merge(right, left);
            return sorted;
        }
        return start;
    }
    
    sort() {
        this.head = this.#sortUtil(this.head);
    }

}


module.exports = LinkedList;