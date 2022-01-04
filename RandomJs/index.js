let BinarySearchTree = require('../RandomJs/DataStructures/BinarySearchTree');
(() => {
    
    let l1 = new BinarySearchTree();
    l1.insert(5);
    l1.insert(3);
    l1.insert(8);
    l1.insert(2);
    l1.insert(4);
    l1.insert(10);
    l1.insert(6);

    l1.traverse("pre");
    l1.traverse("level");
    l1.traverse("post");
    l1.traverse("in");
    l1.traverse("leftview");
    l1.traverse("rightview");
    l1.traverse("topview");
    l1.traverse("depthfirst");
    console.log(l1.getHeight());
    console.log(l1.getDiameter());
    console.log(l1.findMaximumPathSum());

})();