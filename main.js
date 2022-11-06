const Node = (value = null, next = null) => ({ value, next });

const LinkedList = (list) => {

    const append = (value) => {
        let nodeList = list;

        if (nodeList) {
            while (nodeList.next) {
                nodeList = nodeList.next;
            }

            nodeList.next = Node(value);
        }

        console.log(`APPEND VALUE (${value})`);
        console.log("UPDATED LIST: ", nodeList);
    };

    const prepend = (value) => {
        let newNodeList = Node(value);
        newNodeList.next = list;
        list = newNodeList;

        console.log(`PREPEND VALUE (${value})`, newNodeList);
        console.log("UPDATED LIST: ", newNodeList);
    };

    const size = () => {
        let nodeList = list;
        let count = 1;

        if (nodeList) {
            while (nodeList.next) {
                nodeList = nodeList.next;
                count++;
            }
        }

        console.log(`LINKED LIST SIZE: ${count}`);
        return count;
    };

    const head = () => {
        let headNode = list;

        console.log(`LINKED LIST HEAD: `, headNode);
    };

    const tail = () => {
        let tailNode = list;

        if (tailNode) {
            while (tailNode.next) {
                tailNode = tailNode.next;
            }
        }

        console.log("LINKED LIST TAIL: ", tailNode);
        return tailNode;
    };

    const at = (index) => {
        if(size() === 0) console.log("List is empty!");
        else if (index < 1 || index > size()) console.log(`Node at index ${index} does not exist!`);
        else {
            let nodeList = list;
            let count = 1;
    
            if (nodeList) {
                while (nodeList.next && count !== index) {
                    nodeList = nodeList.next;
                    count++
                }
            }

            console.log(`NODE AT INDEX (${index})`, nodeList);
        }
    };

    const pop = () => {
        let nodeList = list;
        let count = 1;

        if (nodeList) {
            while (nodeList.next && count < size() - 1) {
                nodeList = nodeList.next;
                count++;
            }

            nodeList.next = null;
        }

        console.log("POP OR REMOVE LAST NODE!");
        console.log("UPDATED LIST: ", list);
    };

    const contains = (value) => {
        let nodeList = list;
        let isContain = false;
        
        if (nodeList) {
            while (nodeList.next) {
                if (nodeList.value === value) isContain = true;
                nodeList = nodeList.next;
            }
        }

        console.log(`DOES LINKED LIST CONTAIN VALUE (${value})?` , isContain);
        return isContain;
    };

    const find = (value) => {
        let nodeList = list;
        let count = 1;

        if (nodeList) {
            while (nodeList.next && nodeList.value !== value) {
                nodeList = nodeList.next;
                count++;
            }

            if (nodeList.next === null) count = null;
        }

        console.log(`FIND INDEX OF NODE VALUE ${value}: `, count);
        return count;
    };

    const toString = () => {
        let nodeList = list;
        let nodeToString = "";

        if (nodeList) {
            while (nodeList.next) {
                nodeToString += `( ${nodeList.value} ) -> `;
                nodeList = nodeList.next;
            }

            nodeToString += `( ${nodeList.value} ) -> null`;
        }

        else nodeToString = "null";

        console.log("NODE TO STRING: ", nodeToString);
        return nodeToString;
    };

    const insertAt = (value, index) => {
        let nodeList = list;
        let cutNodeList = null;
        let newNodeList = Node(value);
        let count = 1;

        if (nodeList) {
            while (nodeList.next && count !== index - 1) {
                nodeList = nodeList.next;
                count++;
            }

            cutNodeList = nodeList.next;
            nodeList.next = newNodeList;
            newNodeList.next = cutNodeList;
        }

        console.log(`INSERT AT: (${value}, ${index})`);
        console.log(`UPDATED LIST: `, list);
    };

    const removeAt = (index) => {
        let nodeList = list;
        let newNodeList = null;
        let count = 1;

        if (nodeList) {

            if (index === 1) {
                newNodeList = nodeList.next;
                list = newNodeList;
            }

            else {
                while (nodeList.next && count !== index - 1) {
                    nodeList = nodeList.next;
                    count++;
                }
    
                newNodeList = nodeList.next.next;
                nodeList.next = newNodeList;
            }
        }

        console.log(`REMOVE AT INDEX (${index})`);
        console.log("UPDATED LIST: ", list);
    };

    return { append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt };
};

let node1 = Node("John");
let list = LinkedList(node1);

list.prepend("Carlos");
list.prepend("Michael");
list.prepend("Brian");

// list.head();
// list.tail();
// list.at(2);
// list.pop();
// list.contains("Brian");
// list.find("Carlos");
// list.toString();
// list.insertAt("Naruto", 3);
// list.removeAt(1);
