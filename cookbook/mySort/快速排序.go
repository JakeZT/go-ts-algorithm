package main

import "fmt"

func main() {
	list := []int{5, 9, 1, 6, 8, 14, 6, 49, 25, 4, 6, 3}
	list = quickSort(list)
	fmt.Println(list)
}

func quickSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}
	left, right := []int{}, []int{}
	pivot, arr := arr[0], arr[1:]
	for _, val := range arr {
		if val <= pivot {
			left = append(left, val)
		} else {
			right = append(right, val)
		}
	}
	res := []int{}
	res = append(res, quickSort(left)...)
	res = append(res, pivot)
	res = append(res, quickSort(right)...)
	return res
}
