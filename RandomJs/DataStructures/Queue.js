class Queue {
   
    constructor(size = 10) {
        this.size = size;
        this.queue = new Array();
        this.start = -1;
        this.end = -1;
    }

    enque(value) {
        if(Math.abs(this.end-this.start) == this.size-1 || this.start-this.end == 1) {
            console.log("queue is full");
            return; 
        }
        this.queue[(++this.end) % this.size] = value;
        if(this.start == -1) ++this.start;
    }
       
    deque() {
        if(this.start == -1 && this.end == -1) {
            console.log("Queue is empty");
            return;
        }
        
        let value = this.queue[this.start];
        delete this.queue[this.start];

        if(this.start == this.end) {
            this.start = -1;
            this.end = -1;
        } else {
            this.start = ((++this.start) % this.size)
        }

        console.log(value);
    }

    size() {
        return this.size;
    }

    print() {
        console.log(...this.queue.filter(e => e !== undefined));
    }

}

module.exports = Queue;