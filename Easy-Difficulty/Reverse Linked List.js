//https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    //iterate through
    //set all references to previous node
    let prev = null;

    while (head){
        const tempNext = head.next; //helps us procede to next node
        head.next = prev;
        prev = head; //sets up next prev
        head = tempNext;
    }

    return prev;

};
