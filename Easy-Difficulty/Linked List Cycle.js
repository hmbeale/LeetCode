//https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  //gotta be a ll for there to be a loop
  if (head == null) {
    return false;
  }

  //right away there's no loop
  if (head.next == null) {
    return false;
  }

  let fast = head;
  let slow = head;

  //two pointers
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    //pointers overlapped and there is a cycle
    if (slow == fast) {
      return true;
    }
  }
  return false;
};
