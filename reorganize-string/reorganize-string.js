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
      if (this.heap[leftIdx] == null) break;
      if (this.heap[rightIdx] == null) {
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
        break;
      }
    }
    return result;
  }
}

var reorganizeString = function(s) {
    const counter = {};
    s.split('').forEach((x) => { 
      counter[x] = (counter[x] || 0)+1; 
    });
    const sortable = Object.entries(counter)
        .sort(([, a], [, b]) => b-a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
    
    let answer = '', checker = '', max = 0, idx = 0;
    let keys = Object.keys(sortable);
    let values = Object.values(sortable);
    const heap = new MyHeap();
    
    values.forEach(cnt => heap.push(cnt));
    while(heap.size() > 0) {
        max = heap.pop();
        idx = values.indexOf(max);
        if(checker !== keys[idx] && max !== 0) {
            answer += keys[idx];
            checker = keys[idx];
            values[idx]--;
            if(values[idx]) {
                heap.push(values[idx]);
            }
        }
        else if(checker === keys[idx] && max !== 0) {
            let tempValue = values[idx];
            let tempValueIdx = idx;
            values[idx] = 0;
            max = heap.pop();
            idx = values.indexOf(max);
            if(!keys[idx]) {
                return "";
            }
            answer += keys[idx];
            checker = keys[idx];
            values[idx]--;
            if(values[idx]) {
                heap.push(values[idx]);
            }
            heap.push(tempValue);
            values[tempValueIdx] = tempValue;
        }
    }
    return answer;
}
