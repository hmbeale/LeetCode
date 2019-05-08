//https://leetcode.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    //hash table
    //less clever and space efficient than two pointers
    //but just as fast

    let nodes = new Map();

    let cur0 = headA;
    let cur1 = headB;

    while (cur0){
        nodes.set(cur0, true);
        cur0 = cur0.next;
    }

    while (cur1){
        if (nodes.has(cur1)){
            return cur1;
        }
        cur1 = cur1.next;
    }

    return null;


};
