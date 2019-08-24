class BinaryTreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Queue {
	constructor() {
		this.items = [];
		this.front = 0;
		this.rear = 0;
	}
	enqueue(item) {
		return this.items.push(item); // push last
	}
	dequeue(item) {
		return this.items.shift(); // pop front
	}
	print() {
		console.log(this.items.join())
	}
	getFront() {
		return this.items[0];
	}
	getRear() {
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		console.log(this.items.length);
		return this.items.length === 0;
	}
}

class Stack {
	constructor() {
		this.items = [];
	}

	push(item) {
		return this.items.push(item);
	}

	pop() {
		return this.items.pop();
	}

	isEmpty() {
		return this.items.length === 0;
	}
}

// BFS -> level ordering traversal

// DFS -> Inorder, preorder, postorder
class BinaryTree {
	constructor() {
		this.root = null;
	}

    /*
				6
		2				43
	1		5		12		81

	BFS -> 6, 2, 43, 1, 5, 12, 8
    */
	init() {
		let x = new BinaryTreeNode(6);
		let l1 = new BinaryTreeNode(2);
		let l11 = new BinaryTreeNode(1);
		let l12 = new BinaryTreeNode(5);
		let l2 = new BinaryTreeNode(43);
		let l21 = new BinaryTreeNode(12);
		let l22 = new BinaryTreeNode(81);
		this.root = x;
		x.left = l1;
		x.right = l2;
		l1.left = l11;
		l1.right = l12;
		l2.left = l21;
		l2.right = l22;
	}
}

var q = new BinaryTree();
q.init();

function levelOrderTraversal(root) {
	let que = new Queue();
	let myArr = [];
	console.log(que.items);
	let temp = root;
	que.enqueue(temp);
	console.log(que.isEmpty());
	while (!que.isEmpty()) {
		temp = que.dequeue();
		myArr.push(temp.value);
		if (temp.left !== null) que.enqueue(temp.left);
		if (temp.right !== null) que.enqueue(temp.right);
	}
	console.log(myArr);
}

levelOrderTraversal(q.root);

/*
				6
		2				43
	1		5		12		81

	BFS -> 6, 2, 43, 1, 5, 12, 8
	DFS -> 6, 2, 1, 5, 43, 12, 81
    */

// root left right
function preOrderTraversal(root) {
	let stac = new Stack();
	let temp = root;
	let myArr = [];
	stac.push(temp);
	while(!stac.isEmpty()) {
		temp = stac.pop(temp);
		myArr.push(temp.value);
		if (temp.right !== null) stac.push(temp.right);
		if (temp.left !== null) stac.push(temp.left);
	}
	console.log(myArr);
}

preOrderTraversal(q.root);
