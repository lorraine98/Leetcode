
class MyQueue {
    constructor() {
        this.in = [];
        this.out = [];
    }

    push(x) {
        this.in.push(x);
    }

    pop() {
        if (this.out.length === 0) {
            this.out = this.in.reverse();
            this.in = [];
        }
        return this.out.pop();
    }

    peek() {
        if (this.out.length === 0) {
            this.out = this.in.reverse();
            this.in = [];
        }
        return this.out[this.out.length - 1];
    }

    empty() {
        return this.in.length === 0 && this.out.length === 0;
    }
}
