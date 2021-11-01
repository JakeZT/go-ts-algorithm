package main

import "fmt"

func main() {
	list := []int{5, 9, 1, 6, 8, 14, 6, 49, 25, 4, 6, 3}
	list = mergeSort(list)
	fmt.Println(list)
}

func mergeSort(arr []int) []int {
	length := len(arr)
	if length < 2 {
		return arr
	}
	mid := length / 2
	left := arr[:mid]
	right := arr[mid:]
	res := merge(mergeSort(left), mergeSort(right))
	return res
}

func merge(left, right []int) []int {
	result := []int{}
	for len(left) > 0 && len(right) > 0 {
		if left[0] <= right[0] {
			val := left[0]
			left = left[1:]
			result = append(result, val)
		} else {
			val := right[0]
			right = right[1:]
			result = append(result, val)
		}
	}
	result = append(result, left...)
	result = append(result, right...)
	return result
}
