let LinkedList = require('../RandomJs/DataStructures/LinkedList');
(() => {
    
    let l1 = new LinkedList();
    l1.add(1);
    l1.add(3);
    l1.add(5);
    l1.add(2);
    l1.add(4);
    l1.sort();
    l1.print();
})();