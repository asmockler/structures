/* @flow */

export default class Node {
  data: any;
  next: Node|null;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}
