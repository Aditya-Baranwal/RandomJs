let LinkedList = require('./DataStructures/LinkedList');
(() => {

    let l1 = new LinkedList();    
    
    l1.add(0);
    l1.add(1);
    l1.add(2);
    l1.add(3);

    l1.print();
    
    l1.reverseUsingRecursion();

    l1.print();

})();