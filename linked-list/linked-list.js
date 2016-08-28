/* @flow */

import Node from './node';

export default class LinkedList {
  length: number;
  head: Node|null;
  tail: Node|null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  ////
  // Inserts a value at the head
  //
  insertFirst(data: any) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }

  ////
  // Inserts a value at the tail
  //
  insertLast(data: any) {
    const newNode = new Node(data);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  ////
  // Finds a node by value
  //
  find(data: any) {
    if (this.head === null) { return null; }

    let currentNode = this.head;

    while (true) {
      if (currentNode === null) { break; }

      if (currentNode.data === data) { break; }

      currentNode = currentNode.next;
    }

    return currentNode;
  }

  ////
  // Removes a node by value
  //
  remove(data: any) {
    if (this.head === null) { return this; }

    let currentNode = this.head;
    let previousNode = null;
    let valueFound = false;

    while (true) {
      if (currentNode === null) { break; }
      if (currentNode.data === data) {
        valueFound = true;
        break;
      }

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (valueFound) {
      if (previousNode === null) {
        this.head = currentNode.next;
      } else {
        previousNode.next = currentNode.next;
      }

      this.length--;
      return this;
    }

    return this;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return this;
  }
}
