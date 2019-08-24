// [1,2,3,4] enquue-end deque-front
class Queue {
	constructor() {
		this.items = [];
		this.front = 0;
		this.rear = 0;
	}
	enqueue(item) {
		this.items.push(item);
	}
	dequeue(item) {
		this.items.shift();
	}
	print() {
		console.log(this.items.join())
	}
}

var x = new Queue();
x.enqueue(1);
x.enqueue(2);
x.enqueue(3);
x.print();
x.dequeue();
x.print();
x.enqueue(4);
x.print();
x.dequeue();
x.print();
