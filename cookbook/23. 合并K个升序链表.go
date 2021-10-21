package main

func main() {}

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeKLists(lists []*ListNode) *ListNode {
	length := len(lists)
	if length < 1 {
		return nil
	}
	if length == 1 {
		return lists[0]
	}
	num := length / 2
	left := mergeKLists(lists[:num])
	right := mergeKLists(lists[num:])
	return subMerge(left, right)
}

func subMerge(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil {
		return l2
	}
	if l2 == nil {
		return l1
	}
	if l1.Val < l2.Val {
		l1.Next = subMerge(l1.Next, l2)
		return l1
	}
	l2.Next = subMerge(l1, l2.Next)
	return l2
}
