class Stack {
	constructor() {
		this.items = [];
		this.top = 0;
	}
	push(item) {
		this.items.push(item);
		this.top++;
	}
	pop(item) {
		this.items.pop(item);
		this.top--;
	}
	print() {
		console.log(this.items.join());
	}
}

var x = new Stack();
x.push(1);
x.push(2);
x.push(3);
x.print();
x.pop();
x.print();
x.pop();
x.print();
x.push(4);
x.print();