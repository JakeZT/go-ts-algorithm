package main

func main() {

}
func sumZero(n int) []int {
	res := []int{}
	sum := 0
	for i := 1; i < n; i++ {
		res = append(res, i)
		sum += i
	}
	res = append(res, -sum)
	return res
}
