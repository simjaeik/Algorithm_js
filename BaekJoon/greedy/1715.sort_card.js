const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => +e);
const n = input[0];
let arr = input.slice(1);
class MinHeap {
  constructor() {
    this.nodes = [];
  }

  insert(data) {
    this.nodes.push(data);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;
    const currentNode = this.nodes[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.nodes[parentIndex];
    // 부모값이 더 작으면 끝내기
    if (parentNode <= currentNode) return;
    // 그렇지 않으면 자리바꾸기
    this.nodes[index] = parentNode;
    this.nodes[parentIndex] = currentNode;
    index = parentIndex;
    this.bubbleUp(index);
  }

  extract() {
    const min = this.nodes[0];
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return min;
    }
    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    const length = this.nodes.length;
    let minimum = index;
    if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;
    // 힙은 완전이진트리니까 왼쪽자식만 없는 경우는 없음
    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
        minimum = leftChildIndex;
      }
    }
    if (this.nodes[leftChildIndex] > this.nodes[rightChildIndex]) {
      if (
        rightChildIndex <= length &&
        this.nodes[rightChildIndex] < this.nodes[minimum]
      ) {
        minimum = rightChildIndex;
      }
    } else {
      if (
        leftChildIndex <= length &&
        this.nodes[leftChildIndex] < this.nodes[minimum]
      ) {
        minimum = leftChildIndex;
      }
    }
    if (minimum !== index) {
      let t = this.nodes[minimum];
      this.nodes[minimum] = this.nodes[index];
      this.nodes[index] = t;
      this.trickleDown(minimum);
    }
  }
}

let heap = new MinHeap();
for (let number of arr) {
  heap.insert(number);
}
let totalSum = 0;
while (heap.nodes.length > 1) {
  let sum = heap.extract() + heap.extract();
  heap.insert(sum);
  totalSum += sum;
}
console.log(totalSum);
