let BinarySearchTreeNode = require('../DataStructures/Nodes/BinarySearchTreeNode');

class BinarySearchTree {

    constructor() {
        this.head = null;
        this.diameter = 0;
        this.maxPathSum = 0;
    }

    insert(value) {
        try {
            
            if(this.head == null) {
                this.head = new BinarySearchTreeNode(value);
            } else {
                let current = this.head, temp = null;
                
                while(current != null) {
                    if(current.value == value) return value;
                    temp = current;
                    if(value < current.value) {
                        current = current.left;
                    } else {
                        current = current.right;
                    }
                }

                if(value > temp.value) {
                    temp.right = new BinarySearchTreeNode(value);
                } else {
                    temp.left = new BinarySearchTreeNode(value);
                }                
            }
        } catch(error) {
           throw(error); 
        }
    }

    delete() {
        try {

        } catch(error) {
           throw(error); 
        }
    }

    search() {
        try {       
            if(this.head == null) { 
                return null
            } else {
                let current = this.head;
                
                while(current != null) {
                    if(current.value == value) return value;
                    if(value < current.value) current = current.left;
                    if(value > current.value) current = current.right;
                }

                return null;
            }
        } catch(error) {
           throw(error); 
        }
    }

    traverse(type) {
        try {

            let result = [];
            if(this.head == null) {
                console.log(result);
                return;
            }

            switch(type) {
                case 'pre':
                    this.#preorder(this.head, result);
                break;
                case 'post':
                    this.#postorder(this.head, result);
                break;
                case 'in':
                    this.#inorder(this.head, result);
                break;
                case 'level':
                    this.#levelorder(this.head, result);
                break;
                case 'leftview' :
                    this.#leftview(result);
                break;
                case 'rightview' :
                    this.#rightview(result);
                break;
                case 'topview' :
                    result = this.#topview(result);
                break;
                case 'depthfirst' :
                    this.#depthFirstSearch(this.head, [], result);
                default : break;
            }

            console.log(`${type}  -->>`, ...result);

        } catch(error) {
           throw(error); 
        }
    }

    #inorder(node, result) {
        try {
            if(node.left) this.#inorder(node.left, result);
            result.push(node.value);
            if(node.right) this.#inorder(node.right, result);
        } catch(error) {
            throw(error);
        }
    }

    #preorder(node, result) {
        try {
            result.push(node.value);
            if(node.left) this.#preorder(node.left, result);
            if(node.right) this.#preorder(node.right, result);
        } catch(error) {
            throw(error);
        }
    }

    #postorder(node, result) {
        try {
            if(node.left) this.#postorder(node.left, result);
            if(node.right) this.#postorder(node.right, result);
            result.push(node.value);
        } catch(error) {
            throw(error);
        }
    }

    // bfs - breadth first search.
    #levelorder(node, result) {
        try {
            let q1 = [];
            if(node == null) { return result;
            } else {
                q1.push(node);
                while(q1.length > 0) {
                    let temp = q1.shift();
                    result.push(temp.value);
                    if(temp.left) q1.push(temp.left);
                    if(temp.right) q1.push(temp.right);
                }
            }
        } catch(error) {
            throw(error);
        }
    }
    
    #depthFirstSearch(node, nodeStack, result) {
        try {
            result.push(node.value);
            nodeStack.push(node);
            if(node.left) this.#depthFirstSearch(node.left, nodeStack, result);
            if(node.right) this.#depthFirstSearch(node.right, nodeStack, result);
            nodeStack.pop(node);
        } catch(error) {
            throw(error);
        }
    }

    #leftview(result) {
        try {
            let q1 = [], q2 = [];
            q1.push(this.head);
            while(q1.length > 0 || q2.length > 0) {
                if(q1.length > 0) {
                    this.#_view(q1, q2, 0, result);      
                } else {
                    this.#_view(q2, q1, 0, result);
                }                 
            }
        }catch(error) {
            throw(error)
        }
    }

    #rightview(result) {
        try {
            let q1 = [], q2 = [];
            q1.push(this.head);
            while(q1.length > 0 || q2.length > 0) {
                if(q1.length > 0) {
                    this.#_view(q1, q2, q1.length-1, result);      
                } else {
                    this.#_view(q2, q1, q2.length-1, result);
                }                 
            }
        }catch(error) {
            throw(error)
        }
    }

    #_view(q1, q2, index, result) {
        try {
            let temp = q1[index];
            result.push(temp.value);
            q1.forEach((node, index) => {
                if(node.left) q2.push(node.left);
                if(node.right) q2.push(node.right);
                q1.splice(index);
            });
        } catch(error) {
            throw(error);
        }
    }
    
    #topview(result) {
        try {
            let leftView = [], rightView = [];
            this.#leftview(leftView);
            this.#rightview(rightView);
          
            if(leftView.length > 0 && rightView.length > 0) {
                leftView.reverse();
                rightView.splice(0, 1);
                result = leftView.concat(rightView);
            } else if(leftView.length > 0) {
                leftView.reverse();
                result = leftView;
            } else if(rightView.length > 0) {
                rightView.splice(0, 1);
                result = rightView;
            } else {
                result = [];
            }

            return result;
            
        }catch(error) {
            throw(error)
        }
    }

    getHeight(node = this.head) {
        try {
            if(!node) return 0;
            let leftHeight = 0, rightHeight = 0;
            leftHeight = this.getHeight(node.left);
            rightHeight = this.getHeight(node.right);
            return 1 + Math.max(leftHeight, rightHeight);
        } catch(error) {
            throw(error);
        }
    }

    // binary tree is balanced when
    // for each node --> AbsDiffOf(leftHeight - rightHeight) < 1 
    isBalanced(node = this.head) {
        try {
            if(!node) { return 0 };
            let leftHeight = this.isBinaryTreeBalanced(node.left);
            let rightHeight = this.isBinaryTreeBalanced(node.right);
            if(lh == -1 || rh == -1 || Math.abs(lh - rh) > 1) return -1;
            return (1 + Math.max(leftHeight, rightHeight));
        } catch(error) {
            throw(error);
        }
    }

    // diameter for a node = leftHeight + rightHeight
    getDiameter() {
        try {
            this.#getDiameterUtil(this.head);
            return this.diameter;
        } catch(error) {
            throw(error);
        }
    }

    #getDiameterUtil(node) {
        try {
            if(node == null) return 0;
            let leftHeight = this.#getDiameterUtil(node.left);
            let rightHeight = this.#getDiameterUtil(node.right);
            this.diameter = Math.max(this.diameter, leftHeight + rightHeight);
            return 1 + Math.max(leftHeight, rightHeight); 
        } catch(error) {
            throw(error);
        }
    }

    #bottomview() {
        try {
            
        }catch(error) {
            throw(error)
        }
    }

    findMaximumPathSum() {
        this.#findMaximumPathSumUtil();
        return this.maxPathSum;
    }

    #findMaximumPathSumUtil(node = this.head) {
        try {
            if(node == null) return 0;
            let leftMaxPathSum = node.value + this.#findMaximumPathSumUtil(node.left);
            let rightMaxPathSum = node.value + this.#findMaximumPathSumUtil(node.right);
            this.maxPathSum = Math.max(
                this.maxPathSum, 
                leftMaxPathSum + rightMaxPathSum - node.value,
                leftMaxPathSum,
                rightMaxPathSum
            );
            return Math.max(leftMaxPathSum, rightMaxPathSum);
        } catch(error) {
            throw(error);
        }
    }

    
}

module.exports = BinarySearchTree