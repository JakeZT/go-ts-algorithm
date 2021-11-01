package main

func main() {}

func maxUniqueSplit(s string) int {
	set := map[string]bool{}
	max := 0
	var dfs func(string)
	dfs = func(s string) {
		if len(set)+len(s) < max {
			return
		}
		if len(s) == 0 {
			max = Max(max, len(set))
			return
		}
		for i := 0; i < len(s); i++ {
			curStr := s[:i+1]
			if _, ok := set[curStr]; !ok {
				set[curStr] = true
				dfs(s[i+1:])
				delete(set, curStr)
			}
		}
	}
	dfs(s)
	return max
}

func Max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

/* func maxUniqueSplit(s string) int {
	set := map[string]bool{}
	max := 1
	n := len(s)
	var dfs func(int)
	dfs = func(start int) {
		if len(set)+n < max {
			return
		}
		if start == n {
			max = Max(max, len(set))
			return
		}
		temp := ""
		for i := start; i < n; i++ {
			temp += string(s[i])
			if _, ok := set[temp]; !ok {
				set[temp] = true
				dfs(i + 1)
				delete(set, temp)
			}
		}
	}
	dfs(0)
	return max
}

func Max(x, y int) int {
	if x > y {
		return x
	}
	return y
}
*/
