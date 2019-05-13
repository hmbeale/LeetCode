//https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  //iterate lists
  //compare nodes and add lower to l3

  //traverse l1 and splice in l2
  //still need to think about is l2 and l1 have
  //different lengths

  let l3 = new ListNode(0);
  let res = l3;

   if (!l1 && !l2){
       return null;
   }

   if (!l1){
       return l2;
   }

   if (!l2){
       return l1;
   }

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        l3.next = l1;
        l3 = l3.next;
        l1 = l1.next;
      } else {
        l3.next = l2;
        l3 = l3.next;
        l2 = l2.next;
      }
    }

    if (!l1){
       l3.next = l2;
        l3 = l3.next;
        if (l2){
            l2 = l2.next;
        }
    }

    if (!l2){
       l3.next = l1;
        l3 = l3.next;
        if (l1){
          l1 = l1.next;
        }
    }

  }

  return res.next;
};
