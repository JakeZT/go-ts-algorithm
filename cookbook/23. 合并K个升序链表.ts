class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val
		this.next = next === undefined ? null : next
	}
}
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
	const len = lists.length
	if (len < 1) {
		return null
	}
	if (len === 1) {
		return lists[0]
	}
	let mid = Math.floor(len / 2)
	let head: Array<List> = [],
		tail: Array<List> = []
	lists.map((v, index) => {
		if (index < mid) {
			//若等于则会死循环，因为始终2个分不下去。
			head.push(v)
		} else {
			tail.push(v)
		}
	})
	let left = mergeKLists(head)
	let right = mergeKLists(tail)
	return subMerge(left, right)
}

type List = ListNode | null
const subMerge = (l1: List, l2: List): List => {
	if (!l1) {
		return l2
	}
	if (!l2) {
		return l1
	}
	if (l1.val < l2.val) {
		l1.next = subMerge(l1.next, l2)
		return l1
	} else {
		l2.next = subMerge(l2.next, l1)
		return l2
	}
}
