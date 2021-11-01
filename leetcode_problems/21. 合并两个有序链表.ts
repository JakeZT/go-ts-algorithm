namespace Leetcode21 {
	class ListNode {
		val: number
		next: ListNode | null
		constructor(val?: number, next?: ListNode | null) {
			this.val = val === undefined ? 0 : val
			this.next = next === undefined ? null : next
		}
	}
	function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
		const head = new ListNode(-1, l1)
		let cur = head
		while (l1 && l2) {
			if (l1.val < l2.val) {
				cur.next = l1
				l1 = l1.next
			} else {
				cur.next = l2
				l2 = l2.next
			}
			cur = cur.next
		}
		if (!l1) {
			cur.next = l2
		} else {
			cur.next = l1
		}
		return head.next
	}

	function mergeTwoLists2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
		if (!l1) {
			return l2
		}
		if (!l2) {
			return l1
		}
		if (l1.val < l2.val) {
			l1.next = mergeTwoLists2(l1.next, l2)
			return l1
		} else {
			l2.next = mergeTwoLists2(l2.next, l1)
			return l2
		}
	}
}
