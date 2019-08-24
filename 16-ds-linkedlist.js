
class LinkedListNode {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

// 4(head) -> 3 -> 2 -> 1
class LinkedList {
	constructor() {
		this.head = null;
	}
	insert(data) {
		const newNode = new LinkedListNode(data);
		if (this.head === null) {
			this.head = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

	}
	print() {
		let node = this.head;
		console.log(this.head);
		while(node !== null) {
			console.log(node.data);
			node = node.next;
		}
	}

	reverse() {
		let prevNode, curNode;
		if (this.head !== null) {
			prevNode = this.head;
			curNode = this.head.next;
			this.head = curNode;
			prevNode.next = null;
			while (this.head !== null) {
				this.head = this.head.next;
				curNode.next = prevNode;
				prevNode = curNode;
				curNode = this.head;
			}
			this.head = prevNode;
		}
	}
}

var x = new LinkedList();

x.insert(1);
x.insert(2);
x.insert(3);
x.insert(4);
x.print();
x.reverse();
x.print();
