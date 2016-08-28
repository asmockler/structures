import assert from 'assert';

import LinkedList from './../linked-list/linked-list';

describe('LinkedList', function() {
  let linkedList;

  before(function () {
    linkedList = new LinkedList();
  });

  describe('#insertFirst', function() {
    before(function () {
      linkedList.clear();
    });

    it('should insert when the list is empty', function () {
      linkedList.insertFirst('one');

      assert.equal(linkedList.length, 1);
    });

    it('should continue inserting at the head', function () {
      linkedList.insertFirst('zero');

      assert.equal(linkedList.head.data, 'zero');
    });
  });

  describe('#insertLast', function () {
    before(function () {
      linkedList.clear();
    });

    it('should insert when the list is empty', function () {
      linkedList.insertLast('one');

      assert.equal(linkedList.length, 1);
      assert.equal(linkedList.tail.data, 'one');
      assert.equal(linkedList.head.data, 'one');
    });

    it('should insert at the tail without affecting the head', function () {
      linkedList.insertLast('two');

      assert.equal(linkedList.length, 2);
      assert.equal(linkedList.tail.data, 'two');
      assert.equal(linkedList.head.data, 'one');
    });
  });

  describe('#find', function () {
    before(function () {
      linkedList.clear();

      for (let i = 0; i < 100; i++) {
        linkedList.insertLast(i);
      }
    });

    it('should return the first node with the value specified', function () {
      const node = linkedList.find(42);

      assert.equal(node.data, 42);
    });

    it('should return null if the value is not found', function () {
      const node = linkedList.find('nope');

      assert.equal(node, null);
    });

    it('should return null if the list is empty', function () {
      linkedList.clear();
      const node = linkedList.find(42)
      assert.equal(node, null);
    });
  });

  describe('#remove', function () {
    before(function () {
      linkedList.clear();

      for (let i = 0; i < 100; i++) {
        linkedList = linkedList.insertLast(i);
      }
    });

    it('should remove the first found node from the list', function () {
      linkedList = linkedList.remove(10);
      assert.equal(linkedList.length, 99);
    });

    it('should handle an empty list', function () {
      linkedList = linkedList.clear();
      linkedList = linkedList.remove(1);
      assert.ok(linkedList);
    });
  });

  describe('#clear', function () {
    it('should clear the linked list', function () {
      linkedList.clear();

      assert.equal(linkedList.head, null);
      assert.equal(linkedList.tail, null);
      assert.equal(linkedList.length, 0);
    });
  });
});
