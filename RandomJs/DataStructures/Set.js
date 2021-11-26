class Set {

    constructor() {
        this.items = [];
    }

    has(element) {
        try {
            if(this.items.length <= 0 || this.items.indexOf(element) === -1) return false;
            return true;
        } catch(error) {
            throw(error);
        }
    }

    add(element) {
        try {
            if(!this.has(element)) this.items.push(element);
            return element;
        } catch(error) {
            throw(error);
        }
    }

    remove(element) {
        try {            
            const index = this.items.indexOf(element);
            if(index == -1) return;
            return this.items.splice(index, 1);
        } catch(error) {
            throw(error);
        }
    }

}

module.exports = Set;