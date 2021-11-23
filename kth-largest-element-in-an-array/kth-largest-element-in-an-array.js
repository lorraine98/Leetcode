class MyHeap {
  constructor() {
    this.heap = []; // n:parent, 2*n+1:left child, 2*n+2:right child
  }
  size() {
    return this.heap.length;
  }
  push(node) {
    this.heap.push(node);
    let curIdx = this.heap.length - 1;
    let parentIdx = Math.floor((curIdx - 1) / 2);

    while (this.heap[parentIdx] < this.heap[curIdx]) {
      [this.heap[parentIdx], this.heap[curIdx]] = [
        this.heap[curIdx],
        this.heap[parentIdx],
      ];
      curIdx = parentIdx;
      parentIdx = Math.floor((curIdx - 1) / 2);
    }
  }

  pop() {
    let lastIdx = this.heap.length - 1;
    let curIdx = 0;
    [this.heap[curIdx], this.heap[lastIdx]] = [
      this.heap[lastIdx],
      this.heap[curIdx],
    ];
    const result = this.heap.pop();
    lastIdx = this.heap.length - 1;

    while (curIdx < lastIdx) {
      let leftIdx = curIdx * 2 + 1;
      let rightIdx = curIdx * 2 + 2;
      if (!this.heap[leftIdx]) break;
      if (!this.heap[rightIdx]) {
        if (this.heap[curIdx] < this.heap[leftIdx]) {
          [this.heap[curIdx], this.heap[leftIdx]] = [
            this.heap[leftIdx],
            this.heap[curIdx],
          ];
        }
        curIdx = leftIdx;
        break;
      }

      if (
        this.heap[curIdx] < this.heap[leftIdx] ||
        this.heap[curIdx] < this.heap[rightIdx]
      ) {
        const maxIdx =
          this.heap[leftIdx] > this.heap[rightIdx] ? leftIdx : rightIdx;
        [this.heap[curIdx], this.heap[maxIdx]] = [
          this.heap[maxIdx],
          this.heap[curIdx],
        ];
        curIdx = maxIdx;
      } else {
        curIdx = leftIdx;
      }
    }
    return result;
  }
}

var findKthLargest = function(nums, k) {
    const heap = new MyHeap();
    
    nums.forEach(num => heap.push(num));
    for(let i=0; i<k-1; i++) {
        heap.pop();
    }
    return heap.pop()
};