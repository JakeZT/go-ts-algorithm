class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
const addTwoNumbers = function (l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const head = new ListNode(0, null)
	let node1 = 0,
		node2 = 0,
		carry = 0,
		current = head

	while (l1 || l2 || carry !== 0) {
		node1 = l1 ? l1?.val : 0
		node2 = l2 ? l2?.val : 0
		l1 = l1?.next
		l2 = l2?.next
		const sum = node1 + node2 + carry
		current.next = new ListNode(sum % 10, null)
		current = current.next
		carry = Math.floor(sum / 10)
	}
	return head.next
}
