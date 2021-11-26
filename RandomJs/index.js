let Set = require('../RandomJs/DataStructures/Set');
(() => {
    
    let l1 = new Set();
    l1.add(1);
    l1.add(3);
    l1.add(5);
    l1.add(2);
    l1.add(4);
    console.log(l1.has(3));
    console.log(l1.items);
    l1.remove(3);
    console.log(l1.items);
})();