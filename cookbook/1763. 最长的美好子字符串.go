package main

func main() {

}

const SIZE = 26

func checkString(str string) bool {
	var (
		idx      int
		lowerArr = make([]bool, SIZE)
		UpperArr = make([]bool, SIZE)
	)
	for s := range []rune(str) {
		if s >= 97 {
			idx = int(s) - 97
			lowerArr[idx] = true
		} else {
			idx = int(s) - 65
			UpperArr[idx] = true
		}
	}
	for i := 0; i < SIZE; i++ {
		if lowerArr[i] != UpperArr[i] {
			return false
		}
	}
	return true
}

func longestNiceSubstring(s string) (res string) {
	for i := 0; i < len(s); i++ {
		for j := i + 1; j < len(s); j++ {
			size := j + 1 - i
			if checkString(s[i:j+1]) == true && size > len(res) {
				res = s[i : j+1]
			}
		}
	}
	return res
}
