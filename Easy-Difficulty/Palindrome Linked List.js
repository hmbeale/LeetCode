//https://leetcode.com/problems/palindrome-linked-list/

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
var isPalindrome = function(head) {
  //palindromes can be odd or even

  //dumb solution with array
  let pal = [];

  let cur = head;

  while (cur !== null) {
    pal.push(cur.val)
    cur = cur.next;
  }

    let rev = pal.slice(0);
    rev.reverse();

    //compare
    for (i = 0; i<rev.length; i++){
        if (rev[i] != pal[i]){
            return false;
        }
    }

    return true;

};
