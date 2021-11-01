namespace Leetcode19 {
	class ListNode {
		val: number
		next: ListNode | null
		constructor(val?: number, next?: ListNode | null) {
			this.val = val === undefined ? 0 : val
			this.next = next === undefined ? null : next
		}
	}

	function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
		const guard = new ListNode(0, head)
		let first = head,
			second = guard
		for (let i = 0; i < n; i++) {
			first = first.next
		}
		while (first) {
			second = second.next
			first = first.next
		}
		second.next = second.next.next
		return guard.next
	}
}
