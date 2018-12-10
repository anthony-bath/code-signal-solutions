// Definition for singly-linked list:
//function ListNode(x) {
//    this.value = x;
//    this.next = null;
//}

const removeKFromList = (l, k) => {
  let head = {
    next: l,
  };

  let current = head;

  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head.next;
};
