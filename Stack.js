class Stack {

    constructor(size = 10) {
        this.size = size;
        this.stack = new Array();
        this.top = 0;
    }

    push(value) {
        if(this.top !== this.size) {
            ++this.top;
            this.stack[this.top] = value;
            return value;
        }
        return -1; 
    }

    pop() {
        if(this.top !== 0) {
            const value = this.stack[this.top];
            this.stack.splice(-1);
            delete this.stack[this.top];            
            --this.top;            
            return value;
        }
        return null;
    }

    peek() {
        if(this.top !== 0) {
            console.log(this.stack[this.top]);
        }
        return null;
    }

    print() {
        if(this.stack.length == 0) {
            return console.log("Stack is empty");
        }
        console.log(...this.stack.filter(e => e !== undefined));
    }

}

module.exports = Stack;