import { ListNode } from './listNode';

function reverseList(head: ListNode | null): ListNode | null {
  let answer = null;
  let _head = head;

  while (_head) {
    let next = _head.next; // 2, 3, 4, 5
    _head.next = answer; // null, 1, 2, 3, 4
    answer = _head; // (1, null), (2, 1), (3, 2), (4, 3), (5, 4)
    _head = next; // (2, 3), (3, 4), (4, 5), (5, null)
  }
  return answer;
}
