package main

func main() {

}

type ListNode struct {
	Val  int
	Next *ListNode
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	guard := &ListNode{0, head}
	first, second := head, guard
	for i := 0; i < n; i++ {
		first = first.Next
	}
	for ; first != nil; first = first.Next {
		second = second.Next
	}
	second.Next = second.Next.Next
	return guard.Next
}
